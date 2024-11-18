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
		<h2 className='text-gray-800 text-3xl font-bold'>Our Menu</h2>

		<div className='mb-8 space-y-4'>
			<div className=' relative'>
				<Search className='absolute left-3 top-1/2 text-gray-400 transform -translate-y-1/2' />
				<input 
				type='text'
				value=''
				placeholder='Search Menu'
				className='w-full pl-10 pr-4 py-2 border rounded-md'
				/>
			</div>
		</div>
	</div>
  )
}

export default Menu