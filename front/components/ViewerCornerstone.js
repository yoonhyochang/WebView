import { useEffect } from "react";
import cornerstone from "cornerstone-core";

function DicomViewer() {
  useEffect(() => {
    async function loadImage() {
      const res = await fetch("/api/fetchImage");
      const data = await res.json();
      const dicomImageUrl = "data:image/jpeg;base64," + data.dicomImage; // 예: 'http://localhost:8042/instances/${instanceID}/file'

      cornerstone.enable(document.getElementById("dicomImage"));
      cornerstone.loadImage(dicomImageUrl).then((image) => {
        cornerstone.displayImage(document.getElementById("dicomImage"), image);
      });
    }
    loadImage();
  }, []);

  return (
    <canvas
      id="dicomImage"
      style={{ width: "512px", height: "512px" }}
    ></canvas>
  );
}

export default DicomViewer;
