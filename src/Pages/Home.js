import React from 'react'
import HeaderHome from '../Components/HeaderHome'
import Box from '../Components/Box'
import youruniverse from '../Assets/youruniverse.svg'
function Home() {
    return (
        <div>
            <HeaderHome />
            <div className='mx-20 mt-0 '>
                <div className='flex justify-center items-center '>
                    <div >
                        <h1 className=' font-caveat text-9xl font-semibold  text-[#78290f] flex flex-col -mt-10'>Share Your <span className='font-averia text-[10rem] text-pumpkinyellow animate-type '>Universe</span></h1>
                    </div>
                    <div>
                        <img src={youruniverse} alt="youruniverse" className='w-[1000px] h-[800px]  pl-80' />
                        <a href="https://storyset.com/people" target="_blank" rel="noopener noreferrer" className='pl-80 hidden'>
                            People illustrations by Storyset
                        </a>
                    </div>
                </div>

                <div className='mt-0 ml-14'>
                    <div className='flex gap-x-5'>
                        <Box text={'upcoming events'} />
                        <Box text={'activity'} />
                        <Box text={'Reads'} style={{ width: '450px', marginLeft: '75px' }} />
                    </div>
                    <div className='mt-10'>
                        <Box text={'following'} style={{ width: '1000px', height: '900px' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home