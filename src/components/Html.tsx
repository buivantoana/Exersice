import React, { useState } from "react";
import MonacoEditor from "@monaco-editor/react";

const ExerciseEditorHtml = () => {
  const [exercise, setExercise] = useState({
    code: `<!-- Viết mã HTML tạo một thẻ h1 -->
<h1>Đây là tiêu đề h1</h1>`,
    result: "",
  });

  const checkExercise = () => {
    try {
      // Lấy mã HTML từ Monaco Editor
      const htmlCode = exercise.code;
  
      // Tạo một iframe để hiển thị kết quả
      const iframe = document.createElement("iframe");
      document.body.appendChild(iframe);
      const iframeDocument:any = iframe.contentDocument;
      iframeDocument.open();
      iframeDocument.write(htmlCode);
      iframeDocument.close();
  
      // Kiểm tra xem có thẻ h1 trong mã HTML hay không
      const hasH1 = iframeDocument.querySelector("h1") !== null;
  
      // Ghi lại kết quả
      if (hasH1) {
        setExercise((prevExercise) => ({
          ...prevExercise,
          result: "Có thẻ h1 trong mã HTML",
        }));
      } else {
        setExercise((prevExercise) => ({
          ...prevExercise,
          result: "Không có thẻ h1 trong mã HTML",
        }));
      }
  
      // Xóa iframe sau khi kiểm tra
      document.body.removeChild(iframe);
    } catch (error) {
      console.error("Error checking exercise:", error);
    }
  };
  

  const handleChange = (value:any) => {
    setExercise((prevExercise) => ({
      ...prevExercise,
      code: value,
    }));
  };

  return (
    <div>
      <MonacoEditor
        height="200px"
        language="html"
        theme="vs-dark"
        value={exercise.code}
        onChange={handleChange}
      />
      <button onClick={checkExercise}>Kiểm tra kết quả</button>
      <div>
        <label>Kết quả:</label>
        <div>{exercise.result}</div>
      </div>
      <div>
        <label>Kết quả (IFrame):</label>
        <iframe
          title="result"
          srcDoc={`<!DOCTYPE html><html><head><title>Result</title></head><body>${exercise.code}</body></html>`}
          style={{ width: "100%", height: "200px", border: "1px solid #ccc" }}
        />
      </div>
    </div>
  );
};

export default ExerciseEditorHtml;
