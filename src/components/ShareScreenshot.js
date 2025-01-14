import React, { useRef } from "react";
import html2canvas from "html2canvas";
import { Icon } from "@iconify/react/dist/iconify.js";

const ShareScreenshot = () => {
  const captureRef = useRef(null);

  const captureAndShare = async () => {
    if (!navigator.canShare || !navigator.canShare({ files: [] })) {
      alert("Sharing is not supported on this browser.");
      return;
    }

    try {
      // Capture the screenshot
      const canvas = await html2canvas(captureRef.current);
      const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));

      // Create a File object
      const file = new File([blob], "screenshot.png", { type: "image/png" });

      // Trigger OS share dialog
      await navigator.share({
        title: "Shared Screenshot",
        text: "Check out this screenshot!",
        files: [file],
      });

      alert("Screenshot shared successfully!");
    } catch (error) {
      console.error("Error sharing screenshot:", error);
      alert("Failed to share screenshot.");
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="mt-3" ref={captureRef}>
        <h4 className="text-center">Now share it with Soubhik.</h4>
      </div>
      <button className="text-center mt-2 btn secondary-btn d-flex align-items-center gap-2" onClick={captureAndShare}>
      <Icon icon="mynaui:share" width="24" height="24" />Share Screenshot
      </button>
    </div>
  );
};

export default ShareScreenshot;
