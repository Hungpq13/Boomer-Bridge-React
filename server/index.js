const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); 
// Thêm dòng này
const feedbackRouter = require("./feedback");
const path = require("path");

const app = express();
app.use(cors()); 
// Thêm dòng này
app.use(bodyParser.json());
app.use(feedbackRouter);

// Serve static React build
app.use(express.static(path.join(__dirname, "../build")));

// Fallback cho mọi route khác về index.html (SPA)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));