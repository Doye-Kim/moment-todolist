import "dotenv/config";
import express from "express";
import path from "path";

const __dirname = path.resolve();
const app = express();
const PORT = process.env.PORT;

app.use("/", express.static(path.resolve(__dirname, "../momentum")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
  res.send(process.env.NEXT_PUBLIC_API_KEY);
});

app.listen(PORT, () => {
  console.log(`${PORT} Server start`);
});
