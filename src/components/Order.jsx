/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { ShoppingCart, Minus, Plus, X } from 'lucide-react';

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
		  image: '/img/menu_items/Greek salad.jpg',
		},
		{
		  id: 2,
		  name: 'Grilled Fish',
		  description: 'Mediterranean-style grilled fish with lemon',
		  price: 24.99,
		  category: 'mains',
		  image: '/img/Grilled fish B.jpg',
		},
		{
		  id: 3,
		  name: 'Bruschetta',
		  description: 'Grilled bread with tomatoes and herbs',
		  price: 9.99,
		  category: 'starters',
		  image: '/img/menu_items/Bruschetta.jpg',
		},
		{
		  id: 4,
		  name: 'Lemon Dessert',
		  description: 'Traditional Italian lemon cake',
		  price: 8.99,
		  category: 'desserts',
		  image: '/img/menu_items/Lemon dessert.jpg',
		},
		{
			id: 5,
			name: 'Pasta',
			description: 'Pumpkin and Vodka sauce creamy penne pasta',
			price: 19.99,
			category: 'mains',
			image: '/img/pasta.jpg',
		},
	  ];

	const addCart = (item) => {
		const existingItem = cart.find(cartItem => cartItem.id === item.id);
		if(existingItem){
			setCart(cart.map(cartItem =>
				cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity +1} : cartItem
			));
		} else {
			setCart([...cart, {...item, quantity: 1}])
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
				<span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center'>
					{cart.reduce((total, item) => total + item.quantity, 0)}
				</span>
			)}

		</button>

		{showCart && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setShowCart(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-xl">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="text-lg font-semibold">Your Cart</h3>
                <button onClick={() => setShowCart(false)} className="text-gray-400 hover:text-gray-500">
                  <X />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-4">
                {cart.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">Your cart is empty</p>
                ) : (
                  <div className="space-y-4">
                    {cart.map(item => (
                      <div key={item.id} className="flex items-center gap-4 border-b pb-4">
                        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                        <div className="flex-1">
                          <h4 className="font-semibold">{item.name}</h4>
                          <p className="text-gray-500">${item.price}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 hover:bg-gray-100 rounded"
                            >
                              <Minus size={16} />
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 hover:bg-gray-100 rounded"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-400 hover:text-gray-500"
                        >
                          <X size={20} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {cart.length > 0 && (
                <div className="border-t p-4">
                  <div className="flex justify-between mb-4">
                    <span className="font-semibold">Total</span>
                    <span className="font-semibold">${getTotalAmount().toFixed(2)}</span>
                  </div>
                  <button className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 transition-colors">
                    Checkout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Menu */}
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Order Online</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Categories */}
        <div className="md:col-span-1">
          <div className="space-y-2">
            {categories.map(category => (
              <button
                key={category.id}
                className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <div className="md:col-span-2 lg:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map(item => (
              <div key={item.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">${item.price}</span>
                    <button
                      onClick={() => addCart(item)}
                      className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
	</div>
  )
}

export default Order