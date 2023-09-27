import React from 'react'
import Input from '../../Components/Input'
import logo from '../../Assets/vividspace2.png'
import Button from '../../Components/Button'
import pacinggirl from '../../Assets/pacinggirl.jpeg'
const Signin = () => {
  return (
    <div >
      <div>
        <img src={logo} alt="logo" className="w-[210px] h-[72px] mt-2"></img>
      </div>
      <div className='mx-20 my-10 flex justify-between shadow-custom'>
        <div className='w-[900px] h-[780px] pt-20'>
          <p className="text-6xl text-center -mt-8 text-vividblue ">LOGIN</p>
          <p className='text-lg text-gray pt-5 tracking-widest text-center'>Doesn't have an account? <span className='text-pumpkinyellow underline' to="/signup">Sign up</span></p>
          <form className='mt-9 text-center'>
            <p className=' text-2xl '>Email Address</p>
            <br />
            <Input type="email" placeholder="email@gmail.com" />
            <p className='text-2xl mt-5'>Password</p>
            <p className='text-small ml-[220px] text-pumpkinyellow mt-2 underline'>Forgot Password?</p>
            <Input type="password" placeholder="password" />
            <br />
            <div className='mt-6 mr-[230px]'><input type="checkbox" /><span className='pl-2'>Remember me</span></div>
            <br />
            <button className="bg-pumpkinyellow hover:bg-vividgray  rounded-lg  text-2xl font-medium text-black py-2 shadow-custom px-8 w-[400px]">Login</button>

            <p className='text-center mt-4 '>or Login with</p>
            <br />
            <button className="bg-vividblue hover:bg-vividgray text-white  rounded-lg  text-2xl font-medium py-2 hover:text-black shadow-custom px-8 w-[400px]">Google</button>
            {/* <Button text="Google" style={{
              color: 'white', backgroundColor: '#14213D', width: '400px', justifyContent: 'center', marginTop: '0', marginRight: '0',
              onHover: () => {
                this.style.color = 'black';
                this.style.backgroundColor = '#E5E5E5';
              }
            }} /> */}
          </form>
        </div>
        <div className=''>
          <img src={pacinggirl} alt="daydreaming" className='w-[850px] h-[780px] mr-24 -mt-10' />
        </div>
      </div>
    </div>
  )
}

export default Signin