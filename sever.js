const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;
const ORTHANC_URL = "http://localhost:8042"; // Orthanc 서버의 주소

app.get("/patients", async (req, res) => {
  try {
    const response = await axios.get(`${ORTHANC_URL}/patients`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching patients" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
