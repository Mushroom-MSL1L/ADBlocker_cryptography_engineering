const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 6969;

// 使用 body-parser 中間件來解析 JSON 請求體
app.use(bodyParser.json());

app.post("/log", (req, res) => {
  console.log("Received POST request:");
  console.log(req.body);

  // 回應客戶端
  res.status(200).json({ cookieValue: "injectedValueFromServer" });
  console.log("Response sent.");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
