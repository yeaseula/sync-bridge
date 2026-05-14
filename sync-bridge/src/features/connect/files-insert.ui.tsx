import { Upload } from "lucide-react";
import { useFilesInsert } from "./use-files-insert.hook";

export const FilesInsert = () => {
  const { file, isDragging, onDragOver, onDragLeave, onDrop, onFileChange } =
    useFilesInsert();

  return (
    <div
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      className={`group border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center transition-all cursor-pointer bg-[#1c1c1c]
              ${isDragging ? "border-primary-500 bg-primary-500/5" : "border-gray-600 hover:border-primary-500/50"}`}
    >
      <input
        type="file"
        id="file-input"
        className="hidden"
        accept=".ts,.tsx,.js,.jsx"
        onChange={onFileChange}
      />
      <label
        htmlFor="file-input"
        className="cursor-pointer flex flex-col items-center"
      >
        <Upload
          className={`w-10 h-10 mb-4 transition-colors ${file ? "text-primary-500" : "text-gray-600 group-hover:text-primary-500"}`}
        />
        <p className="text-sm font-medium text-gray-300">
          {file ? file.name : "Front-end Code (Local)"}
        </p>
        <p className="text-xs text-gray-500 mt-2 text-center">
          {file ? "Click to change file" : "Upload types.ts or drag & drop"}
        </p>
      </label>
    </div>
  );
};
