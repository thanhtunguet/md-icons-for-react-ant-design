#!/usr/bin/env node

const express = require("express");
const {createServer} = require("http");
const {resolve} = require("path");

const app = express();

app.use(express.static(resolve(__dirname, "docs")));
app.use((req, res) => {
  res.sendFile(resolve(__dirname, "docs", "index.html"));
});

const server = createServer(app);
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log("Web server is up and running on port %d", port);
});
