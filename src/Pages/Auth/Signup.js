import logo from '../../Assets/vividspace2.png'
import Input from '../../Components/Input'
import Button from '../../Components/Button'
import  healbrain from '../../Assets/healbrain.png'
const signup = () => {
  return (
    <div className=''>
      <img src={logo} alt="logoimg" className="w-[210px] h-[100px] mt-2"></img>
      <div className='flex'>
        <img src={healbrain} alt="dreaming" className='w-[1100px] h-[820px] ml-24 -mt-4 ' />

        <div className=' '>
          <form className='w-[550px] h-[600px] text-center shadow-custom rounded-md -ml-19 mt-20'>
            <h1 className='text-5xl font-medium mt-5 text-pumpkinyellow'>Join VividSpace</h1>
            <p className='text-sm text-vividblue font-medium mt-3'>Where Daydreamers Become Wordsmiths, Join Us Now!</p>

            <Input type="text" placeholder="Username" style={{ marginTop: '65px', }} />
            <Input type="email" placeholder="email-id" style={{ marginTop: '45px', }} />
            <Input type="password" placeholder="password" style={{ marginTop: '45px', }} />

            <p className='mt-4 text-gray '>Already have an account? <span className='text-pumpkinyellow underline hover:text-darkyellow'><a href=''>Sign in</a></span></p>
            <div className='flex justify-center'>
              <Button text='sign up' style={{}} />
              <Button text='Google' style={{border:'1px solid #fb8500',backgroundColor:'transparent',':hover':'bg-#fb8500',padding:'6px 28px'}} />
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default signup