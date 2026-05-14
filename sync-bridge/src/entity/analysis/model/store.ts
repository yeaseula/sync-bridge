import { create } from "zustand";

export interface AnalysisSummary {
  severity: "Critical" | "Warning" | "Info";
  type: "Naming" | "Type" | "Enum" | "Missing";
  message: string;
  description: string;
}

export interface AiAnalysisResponse {
  summary: AnalysisSummary[];
  newCode: string;
}

export interface ApiState {
  fileContent: string | null;
  swaggerUrl: string;
  analysisResult: AiAnalysisResponse | null;
  isAnalyzing: boolean;

  setFileContent: (content: string) => void;
  setSwaggerUrl: (url: string) => void;
  setAnalysisResult: (result: AiAnalysisResponse) => void;
  setIsAnalyzing: (loading: boolean) => void;
  reset: () => void;
}
export const useApiStore = create<ApiState>((set) => ({
  fileContent: null,
  swaggerUrl: "",
  analysisResult: null,
  isAnalyzing: false,

  setFileContent: (content) => set({ fileContent: content }),
  setSwaggerUrl: (url) => set({ swaggerUrl: url }),
  setAnalysisResult: (result) => set({ analysisResult: result }),
  setIsAnalyzing: (loading) => set({ isAnalyzing: loading }),
  reset: () =>
    set({
      fileContent: null,
      swaggerUrl: "",
      analysisResult: null,
      isAnalyzing: false,
    }),
}));
