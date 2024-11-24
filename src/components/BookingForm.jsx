/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Clock, Users } from 'lucide-react'

const BookingForm = () => {

    const [formData, setFormData] = useState({
        date: '',
        time: '',
        guests: '2',
        occasion: 'standard',
        name: '',
        email: '',
        phone: '',
    })

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventdefault();
        setSubmitted(true);
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
  
    return (
    <div className='max-w-2xl mx-auto p-6'>
        <div className='mb-6 text-center'>
            <h1 className='text-3xl font-bold mb-2'>Reserve a Table</h1>
            <p className='text-lg '>Little Lemon Restaurant</p>
        </div>
        <form className='space-y-6' onSubmit={handleSubmit}>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'></div>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" />
            
            
            <div className='relative'>
                <label htmlFor="res-time" className='block text-sm font-medium mb-1'>
                    Choose time
                </label>
                <div className='relative'>
                    <select 
                    id="res-time"
                    required
                    className='w-full px-4 py-2 border rounded-md'
                    value={formData.time}
                    onChange={handleChange}
                    >
                        <option value=''>Select time</option>
                        <option>17:00</option>
                        <option>18:00</option>
                        <option>19:00</option>
                        <option>20:00</option>
                        <option>21:00</option>
                        <option>22:00</option>
                    </select>
                    <Clock className='absolute right-3 top-2.5 h-5 w-5' />
                </div>
            </div>

            <div className='relative'>
                <label htmlFor="guests" className='block text-sm font-medium mb-1'>
                    Number of guests
                </label>
                <div className='relative'>
                    <select 
                    type="guests" 
                    required
                    placeholder="1"
                    className='w-full px-4 py-2 border rounded-md'
                    value={formData.guests}
                    onChange={handleChange}
                    >
                        {[1,2,3,4,5,6,7,8,9,10].map(num => (
                            <option key={num} value={num}>{num} {num ===1 ? 'Guest' : 'Guests'}</option>
                        ))}
                    </select>
                    <Users className='absolute right-3 toop-2.5 h-5 w-5 text-gray-400' />
                </div>
            </div>
            <div>
                <label htmlFor="occasion" className='block text-sm font-medium mb-1'>Occasion</label>
                <select 
                id="occasion"
                className='w-full px-4 py-2 border rounded-md'
                value={formData.occasion}
                onChange={handleChange}
                >
                    <option value='standard'>Standard Dining</option>
                    <option value='birthday'>Birthday</option>
                    <option value='anniversary'>Anniversary</option>
                    <option value='business'>Business Meal</option>
                </select>
            </div>
            <div className='md:col-span-2'>
                <label className='block text-sm font-medium mb-1'>
                    Name
                </label>
                <input 
                type='text'
                required
                className='w-full px-4 py-2 border rounded-md'
                value={formData.name}
                onChange={handleChange}
                placeholder='Your full name'
                />
            </div>
            <div className='md:col-span-2'>
                <label className='block text-sm font-medium mb-1'>
                    Email
                </label>
                <input 
                type='email'
                required
                className='w-full px-4 py-2 border rounded-md'
                value={formData.email}
                onChange={handleChange}
                placeholder='Your@email.com'
                />
            </div>
            <div className='md:col-span-2'>
                <label className='block text-sm font-medium mb-1'>
                    Phone
                </label>
                <input 
                type='tel'
                required
                className='w-full px-4 py-2 border rounded-md'
                value={formData.phone}
                onChange={handleChange}
                placeholder='(123) 456-7890'
                />
            </div>

            <div>
                <button
                type='submit'
                className='w-full bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 px-6 rounded-md transition duration-200'>
                    Reserve Table
                </button>
            </div>
        </form>
    </div>
  )
};

export default BookingForm;