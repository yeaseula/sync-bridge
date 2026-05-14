import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export const geminiAPIDiff = async (tsCode: string, swaggerJson: string) => {
  // 모델 설정
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    generationConfig: { responseMimeType: "application/json" }, // JSON 형태로만 응답받기
  });

  // 프롬프트 작성
  const prompt = `
 당신은 TypeScript 및 OpenAPI 스펙 분석 전문가입니다.
아래 제공된 [현재 코드]를 [최신 Swagger 스펙]에 맞게 업데이트하고 그 과정을 분석하세요.

[제약 사항 - 반드시 지킬 것]:
1. 코드 생성 시 절대 생략(...)하지 말고 전체 인터페이스/타입 코드를 반환하세요.
2. Naming Mismatch: 의미가 동일한 필드(예: name vs label)는 Swagger의 이름을 우선하여 코드를 수정하세요.
3. Type Mismatch: Swagger에 정의된 타입을 우선하되, Date 등 프론트엔드에서 변환이 필요한 경우 주석을 달아주세요.
4. Enum: Swagger의 Enum 정의가 변경되었다면 Union Type으로 정확히 반영하세요.
5. 반드시 valid한 JSON 포맷으로만 응답하세요.

[응답 형식]:
{
  "summary": [
    {
      "severity": "Critical | Warning | Info",
      "type": "Naming | Type | Enum | Missing",
      "message": "수정 내용에 대한 한 줄 설명",
      "description": "상세한 기술적 이유와 발생 가능한 런타임 에러 설명"
    }
  ],
  "newCode": "수정된 전체 TypeScript 코드"
}

[현재 코드]:
${tsCode}

[최신 Swagger 스펙]:
${swaggerJson}
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return JSON.parse(response.text()); // JSON 결과 반환
  } catch (error) {
    console.error("AI 분석 중 오류 발생:", error);
    return null;
  }
};
