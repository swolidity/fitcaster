const startPolling = require("@big-whale-labs/botcaster");

const fid = 346164;

startPolling.startPolling(
  fid,
  "3A4B5E7F-95A3-4E80-91A2-D2F1AE5BE306",
  (notification) => {
    console.log(notification);
  }
);
