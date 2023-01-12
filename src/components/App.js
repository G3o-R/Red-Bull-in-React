import "../styles/App.scss"
import Header from "./Header"
import ImageCarousel from "./ImageCarousel"
import Content from "./Content.js"
import { useState } from "react"

function App() {

  const [effect, setEffect] = useState(null)

  let lastScrollY = window.scrollY
  window.addEventListener("scroll",()=>{
    // console.log()
      if(lastScrollY > window.scrollY && window.scrollY > 400){
          // setEffect("header--visible")
          setEffect(null)
      }
      if(lastScrollY > window.scrollY && window.scrollY < 400){
          setEffect("header--transparent")
      }
      else if(lastScrollY < window.scrollY){
          setEffect("header--hidden")
      }
      lastScrollY = window.scrollY
  })
  

  return (
    <div className="App">
      <ImageCarousel />
      <Content /> 
      <Header effect={effect}/>
    </div>
  );
}

export default App;
