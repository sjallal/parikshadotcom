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
// app.use("/api/category", require("./routes/api/category"));
// app.use("/api/product", require("./routes/api/product"));

//Starting a server
app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
