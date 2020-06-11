import React, { useEffect, createRef, useState, useCallback } from "react";
import styled from "styled-components";

interface IProps {
  className?: string;
  children: React.ReactElement;
  handleDrop: (files: FileList) => void;
}
const DragAndDrop = styled((props: IProps) => {
  const dropRef = createRef<HTMLDivElement>();
  const [state, setState] = useState({ dragCounter: 0, dragging: false });

  const handleDrag = useCallback((e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragIn = useCallback((e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setState({ ...state, dragCounter: state.dragCounter + 1 });
    if (e.dataTransfer?.items && e.dataTransfer.items.length > 0) {
      setState({ ...state, dragging: true });
    }
  }, []);
  const handleDragOut = useCallback((e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setState({ ...state, dragCounter: state.dragCounter - 1 });
    if (state.dragCounter > 0) return;
    setState({ ...state, dragging: false });
  }, []);

  const handleDrop = useCallback((e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setState({ ...state, dragging: false });
    if (e?.dataTransfer?.files && e.dataTransfer.files.length > 0) {
      props.handleDrop(e.dataTransfer.files);
      e.dataTransfer.clearData();
      setState({ ...state, dragCounter: 0 });
    }
  }, []);
  useEffect(() => {
    const div = dropRef.current;
    if (div) {
      div.addEventListener("dragenter", handleDragIn);
      div.addEventListener("dragleave", handleDragOut);
      div.addEventListener("dragover", handleDrag);
      div.addEventListener("drop", handleDrop);
    }
    return () => {
      const div = dropRef.current;
      if (div) {
        div.removeEventListener("dragenter", handleDragIn);
        div.removeEventListener("dragleave", handleDragOut);
        div.removeEventListener("dragover", handleDrag);
        div.removeEventListener("drop", handleDrop);
      }
    };
  }, []);
  return (
    <div className={props.className} ref={dropRef}>
      <div className={`wrapper ${state.dragging && "active"}`}>
        <div className="text">Image</div>
      </div>
      {props.children}
    </div>
  );
})`
  position: relative;
  z-index: 100;
  > div.wrapper {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.8);
    z-index: -9999;
    > div.text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      color: rgba(21, 18, 31, 0.3);
    }
    &.active {
      border: dashed rgb(21, 18, 31) 4px;
      > div.text {
      }
    }
  }
`;

export default styled(({ className }: { className?: string }) => {
  const [files, setFiles] = useState<Array<File>>([]);
  const checkFile = (fileArray: Array<File>, newFile: File) =>
    !(fileArray.length >= 4) &&
    !fileArray.filter((existFile) => existFile.name === newFile.name).length &&
    RegExp(".(jpg|jpeg|png)").test(newFile.name);

  const handleDrop = (newfiles: FileList) => {
    const fileList = files;
    Array.from(newfiles).forEach((newfile) => {
      checkFile(files, newfile) && fileList.push(newfile);
    });
    setFiles([...fileList]);
  };

  return (
    <DragAndDrop handleDrop={handleDrop}>
      <div className={className}>
        {files.map((file) => (
          <div className="image-item" key={file.name}>
            <img
              className="image-preview"
              src={URL.createObjectURL(file)}
              alt={`preview-${file.name}`}
            />
            <p className="image-name">{file.name}</p>
          </div>
        ))}
      </div>
    </DragAndDrop>
  );
})`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 300px;
  border: dashed rgba(21, 18, 31, 0.3) 4px;
  padding: 10px;
  .image-item {
    max-width: 25%;
    height: 50%;
    overflow: hidden;
    text-align: center;
    opacity: 0;
    animation: fadeIn 1s linear;
    animation-fill-mode: forwards;
    .image-preview {
      width: 100px;
      height: 100px;
      border-radius: 5px;
      object-fit: cover;
    }
    .image-name {
      font-size: 0.7rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
