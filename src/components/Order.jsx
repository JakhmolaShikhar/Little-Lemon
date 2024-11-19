/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const Order = () => {
	const [cart, setCart] = useState([]);
	const [showCart, setshowCart] = useState(false);

	const addCart = (item) => {
		const existingItem = cart.find(cartItem => cartItem.id === item.id);
		if(existingItem){
			setCart(cart.map(cartItem =>
				cartItem.is === item.id ? {...cartItem, quantity: cartItem.quantity +1} : cartItem
			));
		}
	}

	const removeCart = (itemID) => {
		setCart(cart.filter(item => item.id !== itemID));
	}

  return (
    <div>Order</div>
  )
}

export default Order