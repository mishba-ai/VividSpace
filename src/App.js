import Header from './Components/Header';
import './App.css';
import Button from "./Components/Button";
import image from "./Assets/bluestudy.png"
import daydreamadult from './Assets/daydreamadult.jpeg'
const App = () => {
  return (
    <div className="w-full h-screen">
      <Header />
      <div className='  flex mt-[150px] mb-[150px] justify-between px-[210px]'>
        <div className='w-[750px] h-[350px] '>
          <p className='text-vividblue text-5xl font-medium font-customfont'>Step out of the shadows of <span className="underline decoration-pumpkinyellow">maladaptive daydreaming</span> and step into the spotlight of a purpose-driven life.
          </p>
          <div>
            <Button text="Begin your story" to="/signup"></Button>
          </div>
        </div>
        <img src={daydreamadult} alt="dreaminggirl" className='w-[600px] h-[450px] transform scale-x-[-1] -mt-12 mr-5'></img> 
        
      </div>
      
    </div>
  )
}
export default App;
