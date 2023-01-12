import "../styles/Card.scss"

function Card({image,header,summary,tag,readTime}){
    return(
        <div className="card">
            {/* image */}
            <div className="image-container">
            <img src={image} alt="redbull photo" className="image" />
            </div>
            {/* title */}
            {/* paragraph */}
            {/* bottom left- genre or redbull bulletin logo */}
            {/* bottom right- time to read */}
            <div className="body-container">
            <p className="header">{header}</p>
            <p className="summary">{summary}</p>
            <div className="bottom">
            <p className="tag">{tag}</p>
            <p className="read-Time">{readTime}</p>
            </div>
            </div>
        </div>
    )
}

export default Card