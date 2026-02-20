module.exports = (io) => {
  global.io = io
  io.on("connection", (socket) => {})
}