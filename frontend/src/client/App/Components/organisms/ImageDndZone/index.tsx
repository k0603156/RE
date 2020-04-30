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
    setState({ ...state, dragCounter: state.dragCounter++ });
    if (e.dataTransfer?.items && e.dataTransfer.items.length > 0) {
      setState({ ...state, dragging: true });
    }
  }, []);
  const handleDragOut = useCallback((e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setState({ ...state, dragCounter: state.dragCounter-- });
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
    let div = dropRef.current;
    if (div) {
      div.addEventListener("dragenter", handleDragIn);
      div.addEventListener("dragleave", handleDragOut);
      div.addEventListener("dragover", handleDrag);
      div.addEventListener("drop", handleDrop);
    }
    return () => {
      let div = dropRef.current;
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
      {
        <div className={`wrapper ${state.dragging && "active"}`}>
          <div className={"text"}>Image</div>
        </div>
      }
      {props.children}
    </div>
  );
})`
  display: inline-block;
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
  const [files, setFiles] = useState<string[]>([]);
  const checkFile = (array: string[], name: string) =>
    !array.includes(name) && RegExp(".(jpg|jpeg|png)").test(name);

  const handleDrop = (newfiles: FileList) => {
    let fileList = files;
    Array.from(newfiles).forEach(({ name }) => {
      checkFile(files, name) && fileList.push(name);
    });
    setFiles([...fileList]);
  };

  return (
    <DragAndDrop handleDrop={handleDrop}>
      <div className={className}>
        {files.map((file, index) => (
          <div key={file + index}>{file}</div>
        ))}
      </div>
    </DragAndDrop>
  );
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  border: dashed rgba(21, 18, 31, 0.3) 4px;
`;
