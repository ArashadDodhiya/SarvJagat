// components/ui/FileUpload.tsx
import React from 'react';

interface FileUploadProps {
  id: string;
  name: string;
  accept?: string;
  onChange: (files: FileList | null) => void;
}

export const FileUpload: React.FC<FileUploadProps> = ({ id, name, accept, onChange }) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.files);
  };

  return (
    <div className="flex flex-col space-y-2">
      <input 
        type="file" 
        id={id} 
        name={name} 
        accept={accept} 
        onChange={handleFileChange} 
        className="file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700"
      />
    </div>
  );
};

export default FileUpload;
