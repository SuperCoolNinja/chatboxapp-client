import socketIOClient from "socket.io-client";

const IS_PROD = true;

const ENDPOINT = IS_PROD
  ? "https://chatboxapp-server.vercel.app/"
  : "http://localhost:4000";
export const socket = socketIOClient(ENDPOINT);
