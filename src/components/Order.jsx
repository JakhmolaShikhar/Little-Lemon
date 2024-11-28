/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { ShoppingCart } from 'lucide-react';

const Order = () => {
	const [cart, setCart] = useState([]);
	const [showCart, setShowCart] = useState(false);

	const categories = [
		{ id: 'starters', name: 'Starters' },
		{ id: 'mains', name: 'Main Dishes' },
		{ id: 'sides', name: 'Sides' },
		{ id: 'desserts', name: 'Desserts' },
		{ id: 'drinks', name: 'Drinks' }
	  ];
	
	  const menuItems = [
		{
		  id: 1,
		  name: 'Greek Salad',
		  description: 'Fresh vegetables, olives, and feta cheese',
		  price: 12.99,
		  category: 'starters',
		  image: '/api/placeholder/200/200'
		},
		{
		  id: 2,
		  name: 'Grilled Fish',
		  description: 'Mediterranean-style grilled fish with lemon',
		  price: 25.99,
		  category: 'mains',
		  image: '/api/placeholder/200/200'
		},
		{
		  id: 3,
		  name: 'Bruschetta',
		  description: 'Grilled bread with tomatoes and herbs',
		  price: 9.99,
		  category: 'starters',
		  image: '/api/placeholder/200/200'
		},
		{
		  id: 4,
		  name: 'Lemon Dessert',
		  description: 'Traditional Italian lemon cake',
		  price: 8.99,
		  category: 'desserts',
		  image: '/api/placeholder/200/200'
		}
	  ];

	const addCart = (item) => {
		const existingItem = cart.find(cartItem => cartItem.id === item.id);
		if(existingItem){
			setCart(cart.map(cartItem =>
				cartItem.is === item.id ? {...cartItem, quantity: cartItem.quantity +1} : cartItem
			));
		}
	}

	const removeFromCart = (itemID) => {
		setCart(cart.filter(item => item.id !== itemID));
	}

	const updateQuantity = (itemID, newQuantity) => {
		if(newQuantity < 1){
			removeFromCart(itemID);
			return;
		}
		setCart(cart.map(item =>
			item.id === itemID ? {...item, quantity: newQuantity} : item
		))
	}

	const getTotalAmount = () => {
		return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
	}

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-2'>
			<button 
			onClick={() => setShowCart(true)}
			className='fixed bottom-4 right-4 bg-yellow-400 text-white p-4 rounded-full'
			>
				<ShoppingCart />
				{cart.length > 0 && (
					<span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6'>
						{cart.reduce((item, total) => total + item.quantity, 0)}
					</span>
				)}

			</button>
		</div>
  )
}

export default Order