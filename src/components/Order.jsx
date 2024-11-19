/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { ShoppingCart } from 'lucide-react';

const Order = () => {
	const [cart, setCart] = useState([]);
	const [showCart, setShowCart] = useState(false);

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
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-2'>
			<button 
			onClick={() => setShowCart(true)}
			className='fixed bottom-4 right-4 bg-yellow-400 text-white p-4 rounded-full'
			>
				<ShoppingCart />
				{cart.length > 0 && (
					<span className='absolute'>
						{cart.reduce((item, total) => total + item.quantity, 0)}
					</span>
				)}

			</button>
		</div>
  )
}

export default Order