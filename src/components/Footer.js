import React from 'react'

export const Footer = () => {
  return (
    <div>
        <footer className='py-4 bg-dark text-light'>
            <div className="container">
                <p className='mb-0 text-center'>
                    Copyright &copy; {new Date().getFullYear()} TodoApp All rights reserved.
                </p>
            </div>
        </footer>
    </div>
  )
}
