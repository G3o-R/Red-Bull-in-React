import "../styles/App.scss"
import Header from "./Header"
import ImageCarousel from "./ImageCarousel"
import Content from "./Content.js"
import FooterBillBoard from "./FooterBillboard"
import { useEffect, useState } from "react"

function App() {

  const [effect, setEffect] = useState("header--transparent")
  const [cardData, setCardData] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3001/CardData")
    .then(r=>r.json())
    .then((cardData)=>setCardData(cardData))
  },[])

  let lastScrollY = window.scrollY
  window.addEventListener("scroll",()=>{
      if(lastScrollY > window.scrollY && window.scrollY > 400){
          setEffect("header--visible")
      }
      if(lastScrollY > window.scrollY && window.scrollY < 400){
          setEffect("header--transparent")
      }
      else if(lastScrollY < window.scrollY && window.scrollY > 400){
          setEffect("header--hidden")
      }
      lastScrollY = window.scrollY
  })
  

  return (
    <div className="App">
      <ImageCarousel />
      <Content cardData={cardData}/> 
      <Header effect={effect}/>
      <FooterBillBoard />
    </div>
  );
}

export default App;
