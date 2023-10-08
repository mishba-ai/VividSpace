import React from 'react'

 const Box = ({text,style}) => {
  return (
          <div>
            <div className='w-[500px] h-80 border-none p-3 rounded-xl shadow' style={style}>
                        {text}
                </div>
          </div>
  )
}

export default Box;
