import "../styles/Content.scss"
import Card from "./Card.js"
import CardData from "../data/cardData.js"


function Content(){
    return(<>
        <div className="title">Discover the World of Red Bull</div>
        <div className="card-feed">
        <div className="content-grid">
        {/* create card component */}
        {CardData.map((data)=> <Card 
        image={data.image} 
        header={data.header} 
        summary={data.summary}
        tag={data.tag}
        readTime={data.readTime}
        key={data.id}
        />)}
        {/* load more button */}
    </div>
        </div>
                                </>
    )
}

export default Content