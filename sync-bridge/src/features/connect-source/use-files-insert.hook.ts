import { useState, useCallback } from "react";

export const useFilesInsert = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  // 파일 확장자 체크 및 처리
  const validateAndSetFile = (file: File) => {
    const allowedExtensions = /(\.ts|\.tsx|\.js|\.jsx)$/i;
    if (!allowedExtensions.exec(file.name)) {
      alert(
        "허용되지 않는 파일 형식입니다. (.ts, .tsx, .js, .jsx 파일만 가능)",
      );
      return;
    }
    setFile(file);
    // console.log("선택된 파일:", file.name);
  };

  // 드래그 앤 드롭 핸들러
  const onDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const onDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) validateAndSetFile(droppedFile);
  }, []);

  // 클릭 업로드 핸들러
  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) validateAndSetFile(selectedFile);
  };

  return {
    file,
    setFile,
    isDragging,
    setIsDragging,
    onDragOver,
    onDragLeave,
    onDrop,
    onFileChange,
  };
};
