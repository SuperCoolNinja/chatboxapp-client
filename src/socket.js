import socketIOClient from "socket.io-client";

const ENDPOINT = "http://localhost:4000";
export const socket = socketIOClient(ENDPOINT);
