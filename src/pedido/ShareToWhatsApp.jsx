import React from 'react';

const ShareToWhatsApp = ({ text }) => {
    //the text comes with br tags from html and we need thetext for whatsapp without them
    
    const encodedText = encodeURIComponent(text);
    const whatsAppURL = `https://wa.me/?text=${encodedText}`;
    //console.log("Text to share:", text);

    const openWhatsApp = () => {
        window.open(whatsAppURL, '_blank', 'noopener,noreferrer');
    }

    return (
        
            <button className='content-button status-button open' onClick={openWhatsApp}>
                Share on WhatsApp
            </button>
        
    );
};

export default ShareToWhatsApp;
