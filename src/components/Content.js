import "../styles/Content.scss"
import Card from "./Card.js"

function Content(){
    return(<div className="content">
        <div className="title">Discover the World of Red Bull</div>
        {/* create card component */}
        <Card />
        {/* load more button */}
    </div>
    )
}

export default Content