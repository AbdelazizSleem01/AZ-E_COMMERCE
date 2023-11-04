import React from 'react';
import { Helmet } from 'react-helmet';

class Chatbot extends React.Component {
    componentDidMount() {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.innerHTML = `
            (function (d, m) {
                var kommunicateSettings = {
                    appId: "2b71c708d8cdb50bd97eacc359b2b05ec",
                    popupWidget: true,
                    automaticChatOpenOnNavigation: true
                };
                window.kommunicate = m;
                m._globals = kommunicateSettings;
            })(document, window.kommunicate || {});
        `;
        document.body.appendChild(script);
    }

    render() {
        return (
            <>
                <Helmet>
                    <script
                        type="text/javascript"
                        src="https://widget.kommunicate.io/v2/kommunicate.app"
                    />
                </Helmet>
            </>
        );
    }
}

export default Chatbot;