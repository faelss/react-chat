import { useContext } from "react";
import { AppContext } from "../res/components/AppContext";

const socket = useContext(AppContext);

function emitEvent(event, payload) {
  socket.emit(event, payload);
}

function sendEvent(event) {}

export { emitEvent, sendEvent };
