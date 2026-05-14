import { useApiStore } from "@/entity/analysis";
import { geminiAPIDiff } from "@/shared/api";
import { RefreshCw } from "lucide-react";

export const ScanButton = () => {
  const { fileContent, swaggerUrl, setIsAnalyzing, setAnalysisResult } =
    useApiStore();

  const handleScan = async () => {
    // 1. 유효성 검사
    if (!fileContent || !swaggerUrl) {
      alert("파일을 업로드하고 Swagger URL을 입력해주세요.");
      return;
    }

    setIsAnalyzing(true);

    try {
      // 2. swaggerData 정의 (외부 URL에서 데이터 가져오기)
      const response = await fetch(swaggerUrl);

      if (!response.ok) {
        throw new Error("Swagger 데이터를 가져오는데 실패했습니다.");
      }

      // 여기서 정의되는 swaggerData가 AI에게 전달될 원본입니다.
      const swaggerData = await response.json();

      // 3. AI 분석 함수 호출 (정의한 swaggerData를 문자열로 전달)
      const result = await geminiAPIDiff(
        fileContent,
        JSON.stringify(swaggerData),
      );

      if (result) {
        setAnalysisResult(result); // Zustand 스토어에 결과 저장
      }
    } catch (error) {
      console.error("Error:", error);
      alert("분석 중 오류가 발생했습니다.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <button
      onClick={handleScan}
      className="w-full mt-12 bg-primary-600 hover:bg-primary-500 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-lg shadow-blue-900/20"
    >
      <RefreshCw className="w-5 h-5" />
      Scan & Compare
    </button>
  );
};
