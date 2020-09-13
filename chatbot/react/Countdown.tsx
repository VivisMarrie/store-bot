import React, { useEffect } from "react";

declare global {
  interface Window {
    kommunicate: any;
  }
}
interface ChatbotProps {}
const Countdown: StorefrontFunctionComponent<ChatbotProps> = ({}) => {
  useEffect(() => {
    obtenhaConfig();
  }, []);

  function obtenhaConfig() {
    (function(_, m) {
      var kommunicateSettings = {
        appId: "d118248f66cc6c4efa1c9523ce51e4fc",
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0];
      h.appendChild(s);
      window.kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  }

  return <div></div>;
};

Countdown.schema = {
  title: "editor.countdown.title",
  description: "editor.countdown.description",
  type: "object",
  properties: {},
};

export default Countdown;
