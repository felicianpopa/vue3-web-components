import { defineCustomElement } from "vue";
import Chat from "./chat-window.ce.vue";
import SecondComponent from "./components/second-component.ce.vue";

const ChatWindow = defineCustomElement(Chat);
const SecondComponentExport = defineCustomElement(SecondComponent);

customElements.define("chat-window", ChatWindow);
customElements.define("second-component", SecondComponentExport);
