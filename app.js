const express = require("express");
const jwt = require("jsonwebtoken");
const indexRouter = require('./routes/index');
const blogRouter = require('./routes/blog');

const app = express();

app.use('/', indexRouter);
app.use('/blog', blogRouter);

app.get("/api", (req, res) => {
  res.json({
    message: "Welcome to the API",
  });
});

app.listen(5000, () =>  {
  console.log("Server started on port 5000");
});
