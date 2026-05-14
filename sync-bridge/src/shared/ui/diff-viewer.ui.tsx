import ReactDiffViewer from "react-diff-viewer-continued";

const oldCode = `
interface User {
  id: string;
  usage_status: string;
  purchase_year: string;
}
`;

const newCode = `
interface User {
  id: string;
  condition: string; // usage_status -> condition (AI 제안)
  purchase_year: number; // string -> number (AI 제안)
}
`;

export const DiffViewer = () => {
  return (
    <div className="mt-8 border border-gray-800 rounded-2xl overflow-hidden bg-[#161616]">
      <div className="px-6 py-4 border-b border-gray-800 flex justify-between items-center bg-[#1c1c1c]">
        <h4 className="text-sm font-semibold text-gray-400">Code Comparison</h4>
        <span className="text-xs bg-primary-500/10 text-primary-500 px-2 py-1 rounded">
          AI Optimized
        </span>
      </div>
      <ReactDiffViewer
        oldValue={oldCode}
        newValue={newCode}
        splitView={true}
        useDarkTheme={true}
        styles={{
          variables: {
            dark: {
              diffViewerBackground: "#161616",
              diffViewerTitleBackground: "#1c1c1c",
              diffViewerTitleColor: "#9ca3af",
              addedBackground: "#065f4633", // 초록색 하이라이트
              removedBackground: "#991b1b33", // 빨간색 하이라이트
            },
          },
        }}
      />
    </div>
  );
};
