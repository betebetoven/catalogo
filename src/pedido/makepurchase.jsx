import React from 'react';

const Makepurchase = ({ text }) => {
    //the text comes with br tags from html and we need thetext for whatsapp without them
    
    const encodedText = encodeURIComponent(text);
    const phoneNumber = '50246045383'; 
    const whatsAppURL = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    //console.log("Text to share:", text);

    const openWhatsApp = () => {
        window.open(whatsAppURL, '_blank', 'noopener,noreferrer');
    }

    return (
        
            <button className='content-button status-button open' onClick={openWhatsApp}>
                Hacer pedido
            </button>
        
    );
};

export default Makepurchase;
