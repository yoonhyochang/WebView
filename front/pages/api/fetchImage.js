import axios from "axios";
import * as cornerstone from "cornerstone-core";

export default async (req, res) => {
  try {
    // 인스턴스 리스트를 가져옵니다.
    const instancesResponse = await axios.get(
      "http://localhost:8042/instances"
    );
    const instanceID = instancesResponse.data[0];

    // WADO-URI로 DICOM 이미지 URL을 생성합니다.
    const dicomImageUrl = `http://localhost:8042/instances/${instanceID}/file`;

    // Cornerstone으로 DICOM 이미지를 로드합니다.
    const image = await cornerstone.loadImage(dicomImageUrl);

    // 이미지 데이터를 base64로 변환하여 응답합니다.
    const dicomImage = Buffer.from(image.getPixelData()).toString("base64");

    res.status(200).json({ dicomImage });
  } catch (error) {
    res.status(500).json({ error: "Error fetching DICOM image" });
  }
  re
};
