import React from 'react'

 const Box = ({text,style}) => {
  return (
          <div>
            <div className='w-[500px] h-80  p-3 rounded-xl shadow-[0px_-2px_2px_rgba(0,0,0,0.5)]' style={style}>
                        {text}
                </div>
          </div>
  )
}

export default Box;
