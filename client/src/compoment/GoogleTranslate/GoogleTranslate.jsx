import { useEffect } from 'react';
import './GoogleTranslate.css';

const GoogleTranslate = () => {
    useEffect(() => {
        // Google Translate widget settings
        window.gtranslateSettings = {
            default_language: "en",
            detect_browser_language: true,
            wrapper_selector: ".gtranslate_wrapper",
        };

        // Add the Google Translate script
        const script = document.createElement("script");
        script.src = "https://cdn.gtranslate.net/widgets/latest/float.js";
        script.async = true;
        document.body.appendChild(script);

        // Clean up script on unmount
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="gtranslate_wrapper" ></div>
    );
};

export default GoogleTranslate;