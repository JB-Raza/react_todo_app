import React from 'react'
// import "../App.css"

function Header() {
    return (
        <header className='lg:w-1/5 md:w-1/4 md:h-auto h-full md:min-h-screen sm:w-screen bg-[#8A2BE2]  dark:bg-[#101010]'>

            <nav className='flex justify-between md:flex-col gap-10 py-4'>
                
                <div className="logo text-center cursor-pointer">
                    <i className="fa-regular fa-clipboard w-36 scale-110 text-gray-300 transition-all duration-200 hover:text-white hover:scale-125 font-bold"> Todo</i>
                </div>

                <ul className='flex md:flex-col sm:gap-0 gap-4 text-center ms-auto'>
                    <li className='nav-item-hover'>All Todo</li>
                    <li className='nav-item-hover'>Completed</li>
                    <li className='nav-item-hover'>Pending</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
