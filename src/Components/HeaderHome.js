import React from 'react'
import logo from '../Assets/vividspace2.png'
import thinkinggirl from '../Assets/thinkinggirl.png'
import search from '../Assets/search.svg'

const HeaderHome = () => {
    return (
        <div className='flex w-full h-22 justify-between px-14'>
            <div className=''>
                <img src={logo} className='pt-3 w-56 h-auto' alt="logo" />
            </div>
            <div className='pt-6'>
                <ul className="list-none flex justify-around text-xl font-medium text-center pt-3   border-[3px] border-darkyellow rounded-lg w-[700px] h-16 sticky top-0 px-3 ">
                    <li className='hover:text-pumpkinyellow cursor-pointer'>Home</li>
                    <li className='hover:text-pumpkinyellow cursor-pointer'>Browse</li>
                    <li className='hover:text-pumpkinyellow cursor-pointer'>Community</li>
                    <li className='hover:text-pumpkinyellow cursor-pointer'>Write</li>
                    <li className='hover:text-pumpkinyellow cursor-pointer'>Space</li>

                    <li className='hover:text-pumpkinyellow cursor-pointer flex'>
                        <div className='pt-'>
                            {/* <input placeholder='Search' className=' w-[180px] py-3 pl-3 pr-8  h-10 border-2 border-vividgray rounded-3xl '></input> */}
                            {/* <div class="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none"> */}
                                <img src={search} className=' w-9 h-9 hover:animate-pulse  ' type='' inputMode="text" />
                            {/* </div> */}
                        </div>
                    </li>

                </ul>
            </div>
           
            <div className='pt-4'>
                <img src={thinkinggirl} className='rounded-full border-2 border-pumpkinyellow w-14 h-14' alt="profile" />
            </div>
        </div>

    )
}
export default HeaderHome;
