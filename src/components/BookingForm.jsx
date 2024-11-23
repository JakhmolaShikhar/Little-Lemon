/* eslint-disable no-unused-vars */
import React from 'react'

const BookingForm = () => {
  
    return (
    <div>
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
                <div>
                    <input type="number" placeholder="1" min="1" max="10" id="guests" />
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
            <input type="submit" value="Make Your reservation" />
        </form>
    </div>
  )
};

export default BookingForm;