/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const BookingForm = () => {

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventdefault();
        setSubmitted(true);
    }

    const handleChange = (e) => {

    }
  
    return (
    <div className='max-w-2xl mx-auto p-6'>
        <div className='mb-6 text-center'>
            <h1 className='text-3xl font-bold mb-2'>Reserve a Table</h1>
            <p className='text-lg '>Little Lemon Restaurant</p>
        </div>
        <form className='space-y-6'>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" />
            <label htmlFor="res-time">Choose time</label>
            <select 
            id="res-time"
            required
            className='w-full px-4 py-2 border rounded-md'
            value={''}
            >
                <option value=''>Select time</option>
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
            </select>
            <div className='relative'>
                <label htmlFor="guests" className='block text-sm font-medium mb-1'>
                    Number of guests
                </label>
                <div className='relative'>
                    <select 
                    type="number" 
                    placeholder="1"
                    className='w-full px-4 py-2 border rounded-md'
                    
                    >
                        {[1,2,3,4,5,6,7,8,9,10].map(num => (
                            <option key={num} value={num}>{num} {num ===1 ? 'Guest' : 'Guests'}</option>
                        ))}
                    </select>
                </div>
            </div>
            <label htmlFor="occasion">Occasion</label>
            <select 
            id="occasion"
            className='w-full px-4 py-2 border rounded-md'
            >
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            
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