import { useState } from 'react'
import logo from '../assets/images/logo.svg';
import { menu } from '../data/Data';
import { IoSearch, IoChevronDownOutline, IoChevronUpOutline } from 'react-icons/io5';

function Header() {
    const [toggle, setToggle] = useState(false)
    return (
        <header className='flex justify-between items-center p-4 px-10 absolute w-full bg-gradient-to-b from-[#1e2126] z-10'>
            <img src={logo} alt="" className='w-[90px] cursor-pointer' />
            <ul className='hidden md:flex gap-8'>
                {menu.map((item, index) => (
                    <li key={index} className={`text-gray-400 text-[18px] font-medium cursor-pointer hover:bg-gray-700 hover:text-white px-3 pb-2 py-1 ${item.id==1?"bg-gray-700 text-white" : null} rounded-md transition-all duration-500 ease-in-out`}>{item.title}</li>
                ))}
            </ul>
            <div className='md:hidden'>
                <h2 className='text-white font-medium flex items-center px-3 pb-2 py-1 bg-gray-700 rounded-md cursor-pointer' onClick={() => setToggle(!toggle)}>Home
                    {!toggle ? <IoChevronDownOutline className='mt-1 ml-1' /> : <IoChevronUpOutline className='ml-1' />}
                </h2>
                {toggle ?
                    <ul className='absolute bg-gray-700 w-[200px] text-center mt-3 left-0 right-0 mx-auto rounded-md px-3'>
                        {menu.map((item, index) => (
                            <li key={index} className='text-gray-400 text-[18px] font-medium cursor-pointer mb-3 mt-2 hover:bg-gray-600 hover:text-white px-3 pb-2 py-1 rounded-md transition-all duration-500 ease-in-out'>{item.title}</li>
                        ))}
                    </ul> : null
                }
            </div>
            <div className='flex gap-8'>
                <IoSearch className='text-[35px] text-gray-300 hover:bg-gray-700 px-[3px] pb-[2px] py-[2px] cursor-pointer rounded-md hover:text-white transition-all duration-500 ease-in-out' />
                <h2 className='px-[10px] text-[20px] text-gray-300 border-[2px] border-white rounded-full'>R</h2>
            </div>
        </header>
    )
}

export default Header