import "../styles/App.scss"
import Header from "./Header"
import ImageCarousel from "./ImageCarousel"
import Content from "./Content.js"

function App() {
  return (
    <div className="App">
      <ImageCarousel />
      <Header />
      <Content />
    </div>
  );
}

export default App;
