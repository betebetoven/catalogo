import React from 'react';

const AddToCartButton = ({ productId, size, color }) => {
    const addToCart = () => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        //if size or color are '' then we don't add the item to the cart
        if (size === '' || color === '') {
            console.log('Please select a size and a color');
            return;
        }
        const cartItem = {
            productId: productId,
            size: size,
            color: color
        };

        // Look for the item in the cart by checking productId, size, and color
        const itemIndex = cart.findIndex(item => item.productId === productId && item.size === size && item.color === color);
        
        if (itemIndex === -1) {
            cart.push(cartItem);
            console.log('Item added to cart');
            console.log(cart);
        } else {
            console.log('Item is already in the cart. You can update the quantity here if needed.');
            // Item is already in the cart. You can update the quantity here if needed.
        }

        localStorage.setItem('cart', JSON.stringify(cart));
    };

    return (
        <button className='content-button status-button open' onClick={addToCart}>
            Add to Cart
        </button>
    );
};


export default AddToCartButton;
