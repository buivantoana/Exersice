import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import ReactPlayerTest from "./components/ReactPlayer";
import YouTubePlayer from "./components/ReactYoutube";
import CodeEditor from "./components/MonacoEditer";
import ExerciseEditorHtml from "./components/Html";




function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
      
      <Route path="/player"  element={<ReactPlayerTest/>} />
      <Route path="/monaco"  element={<CodeEditor/>} />
      <Route path="/youtube"  element={<YouTubePlayer/>} />
      <Route path="/html"  element={<ExerciseEditorHtml/>} />
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
