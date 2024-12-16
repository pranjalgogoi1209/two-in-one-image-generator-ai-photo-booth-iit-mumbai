import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import CaptureImagePage from "./pages/captureImagePage/CaptureImagePage";
import GeneratedImagePage from "./pages/generatedImagePage/GeneratedImagePage";
import SharePage from "./pages/sharePage/SharePage";

export default function App() {
  const [capturedImage, setCapturedImg] = useState();
  const [printImage, setPrintImage] = useState();
  const [generatedImg, setGeneratedImg] = useState();
  const [url, setUrl] = useState();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage setUrl={setUrl} />} />

        <Route
          path="/capture-image"
          element={<CaptureImagePage setCapturedImg={setCapturedImg} />}
        />

        <Route
          path="/generated-image"
          element={
            <GeneratedImagePage
              capturedImage={capturedImage}
              setUrl={setUrl}
              setPrintImage={setPrintImage}
              setGeneratedImg={setGeneratedImg}
            />
          }
        />

        <Route
          path="/share"
          element={
            <SharePage
              printImage={printImage}
              setPrintImage={setPrintImage}
              generatedImg={generatedImg}
              url={url}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
