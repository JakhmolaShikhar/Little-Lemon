/* eslint-disable no-unused-vars */
import React from 'react'

const Footer = () => {
    
  const date = new Date();
  return (
    <footer>
        <p>Copyright &copy; { date.getFullYear() } Little Lemon. All rights reserved.</p>
        <nav>
            <ul>
                <li><a href="/privacy" />Privacy Policy</li>
                <li><a href="/terms" />Temrs & Conditions</li>
            </ul>
        </nav>
    </footer>
  )
}

export default Footer