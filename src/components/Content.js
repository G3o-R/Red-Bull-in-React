import "../styles/Content.scss"
import Card from "./Card.js"
import CardData from "../data/cardData.js"


function Content(){
    CardData.map((data)=>console.log(data.id))
    return(<div className="content">
        <div className="title">Discover the World of Red Bull</div>
        {/* create card component */}
        {CardData.map((data)=> <Card 
                                image={data.image} 
                                header={data.header} 
                                summary={data.summary}
                                tag={data.tag}
                                readTime={data.readTime}
                                id={data.id}
                                 />)}
        {/* load more button */}
    </div>
    )
}

export default Content