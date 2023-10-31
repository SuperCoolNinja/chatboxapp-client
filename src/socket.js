import socketIOClient from "socket.io-client";

const IS_PROD = false;

const ENDPOINT = IS_PROD
  ? "https://theoretical-dorian-supercoolninja.koyeb.app/"
  : "http://localhost:4000";
export const socket = socketIOClient(ENDPOINT);
