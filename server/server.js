const path = require("path");
const express = require("express");

const publicPath = path.join(__dirname, "../frontend");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static(publicPath));

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
