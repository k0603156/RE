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
      {state.dragging && (
        <div className={"wrapper"}>
          <div className={"text"}>
            <div>Drag n Drop</div>
          </div>
        </div>
      )}
      {props.children}
    </div>
  );
})`
  display: inline-block;
  position: relative;
  z-index: 100;
  > div.wrapper {
    border: dashed rgb(21, 18, 31) 4px;
    background-color: rgba(255, 255, 255, 0.8);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -9999;
    > div.text {
      position: absolute;
      top: 50%;
      right: 0;
      left: 0;
      text-align: center;
      color: rgb(21, 18, 31);
      font-size: 36;
    }
  }
`;

export default () => {
  const [files, setFiles] = useState<string[]>([]);
  //todo:중복, 확장자 체크
  const handleDrop = (newfiles: FileList) => {
    let fileList = files;
    Array.from(newfiles).forEach(({ name }) => {
      fileList.push(name);
    });
    setFiles([...fileList]);
  };

  return (
    <DragAndDrop handleDrop={handleDrop}>
      <div style={{ height: 300, width: 250 }}>
        {files.map((file, index) => (
          <div key={file + index}>{file}</div>
        ))}
      </div>
    </DragAndDrop>
  );
};
