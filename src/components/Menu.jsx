/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Search } from 'lucide-react'

const Menu = () => {
	const [availableTimes, setAvailableTimes] = useState('');
	const [activeCategory, setActiveCategory] = useState('all');
	const [searchquery, setSearchQuery] = useState('');

	const categories = [
		{id: 'all', name: 'ALL'},
		{id: 'starters', name: 'Starters'},
		{id: 'mains', name: 'Mains'},
		{id: 'desserts', name: 'Desserts'},
		{id: 'drinks', name: 'Drinks'},

	]
	
	const menuItems = [
		{
			id: '1',
			name: 'Greek salad',
			description: 'Fresh vegetables, olives, and feta cheese with our house dressing',
			price: 12.99,
			category: 'starters',
			special: true,
		},
		{
			id: 2,
			name: 'Bruschetta',
			description: 'Grilled bread with tomatoes, garlic, and fresh basil',
			price: 9.99,
			category: 'starters',
		},
		{
			id: 3,
			name: 'Grilled Fish',
			description: 'Mediterranean-style grilled fish with lemon and herbs',
			price: 25.99,
			category: 'mains',
			special: true,
		},
		{
			id: 4,
			name: 'Lemon Dessert',
			description: 'Traditional Italian lemon cake with vanilla ice cream',
			price: 8.99,
			category: 'desserts',
		},
	]

	const filteredItems = menuItems.filter(item => {
		const matchCategory = activeCategory === 'all' || item.category === activeCategory;
		const matchSearch = item.name.toLowerCase().includes(searchquery.toLowerCase()) ||
												item.description.toLowerCase().includes(searchquery.toLowerCase());
		return matchCategory && matchSearch;
	})

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
		<h2 className='text-gray-800 text-3xl font-bold mb-4'>Our Menu</h2>

		<div className='mb-8 space-y-4'>
			<div className=' relative'>
				<Search className='absolute left-3 top-1/2 text-gray-400 transform -translate-y-1/2' />
				<input 
				type='text'
				value={searchquery}
				placeholder='Search Menu'
				onChange={(e) => setSearchQuery(e.target.value)}
				className='w-full pl-10 pr-4 py-2 border rounded-md'
				/>
			</div>
			
			<div className='flex flex-wrap gap-3'>
				{categories.map((category) => (
					<button
					key={category.id}
					onClick={() => setActiveCategory(category.id)}
					className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
						${activeCategory === category.id ? 'bg-yellow-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200' }
						`} 
					>
						{category.name}
					</button>
				))}
			</div>
		</div>

		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
			{filteredItems.map((item) => (
				<div
				key={item.id}
				className='border rounded-lg overflow-hidden hover:shadow-lg transition-shadow'
				>
					<div className='aspect-w-16 aspect-h-9 bg-gray-200'>
						<img 
						src='/api/placeholder/400/225'
						alt={item.name}
						className='object-cover w-full h-full'
						/>
					</div>
					<div className='p-4'>
						<div className='flex justify-between items-start mb-2'>
							<h3 className='text-lg font-bold'>{item.name}</h3>
							<span className='text-yellow-600 font-semibold'>${item.price}</span>
						</div>
						<p className='text-sm text-green-800 mb-4'>{item.description}</p>
						{item.special && (
							<span className='inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded'>Special</span>
						)}
					</div>
				</div>
			))}
		</div>
	</div>
  )
}

export default Menu