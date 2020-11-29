const express = require("express");
const app = express();
app.use(express.json({ extented: false }));

const connectDB = require("./config/db");
connectDB();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("API running...");
});

//My routes
app.use("/api/user", require("./routes/api/user"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/class", require("./routes/api/class"));
app.use("/api/quiz", require("./routes/api/quiz"));
app.use("/api/question", require("./routes/api/question"));

//Starting a server
app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
