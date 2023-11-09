import React from 'react';
import ReactDOM from 'react-dom/client';
import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

Kommunicate.init("2b71c708d8cdb50bd97eacc359b2b05ec", {
automaticChatOpenOnNavigation: true,
popupWidget: true
});

root.render(
  <React.StrictMode>
      <App />
    </React.StrictMode>
);
