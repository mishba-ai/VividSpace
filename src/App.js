import Header from './Components/Header';
import './App.css';
import Button from "./Components/Button";
import image from "./Assets/bluestudy.png"

const App = () => {
  return (
    <div className="w-full h-screen bg-vividblue">
      <Header />
      <div className='  flex mt-[150px] mb-[150px] justify-between mx-[100px]'>
        <div className='w-[750px] h-[350px] '>
          <p className='text-white text-6xl font-medium font-customfont'>Step out of the shadows of maladaptive daydreaming and step into the spotlight of a purpose-driven life.
          </p>
          <div>
            <Button text="Begin your story" to="/signup"></Button>
          </div>
        </div>
        <img src={image} alt="image" className='w-[650px] h-[500px]'></img> 
      </div>
      
    </div>
  )
}


export default App;
