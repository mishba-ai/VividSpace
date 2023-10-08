import React from 'react'

 const Box = ({text,style}) => {
  return (
          <div>
            <div className='w-[500px] h-80  p-3 rounded-2xl border border-slate ' style={style}>
                        {text}
                </div>
          </div>
  )
}

export default Box;
