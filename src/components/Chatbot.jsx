import React from 'react';


class Chatbot extends React.Component {

    constructor(props){
        super(props);
    }
    componentDidMount() {
        (function(d, m){
            var kommunicateSettings = {"appId":"2b71c708d8cdb50bd97eacc359b2b05ec","popupWidget":true,"automaticChatOpenOnNavigation":true};
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});
    }

    render() {
        return (
            <div>
            </div>
        );
    }
}

export default Chatbot;



