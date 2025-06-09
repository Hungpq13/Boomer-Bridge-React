const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Thêm dòng này
const feedbackRouter = require("./feedback");

const app = express();
app.use(cors()); // Thêm dòng này
app.use(bodyParser.json());
app.use(feedbackRouter);

app.listen(5000, () => console.log("Server started on port 5000"));