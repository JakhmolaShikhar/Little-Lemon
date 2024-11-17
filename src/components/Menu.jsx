/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const Menu = () => {
	const [availableTimes, setAvailableTimes] = useState('');
	
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
  return (
    <div>
		<main>
			<section>
				<h1>Welcome to Little Lemon</h1>
				<p>Enjoy our special dishes and best hospitality.</p>
			</section>
    	</main>
		</div>
  )
}

export default Menu