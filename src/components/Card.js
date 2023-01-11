import "../styles/Card.scss"

function Card(){
    return(
        <div className="card">
            {/* image */}
            <div className="image-container">
            <img src="https://img.redbull.com/images/c_crop,x_333,y_0,h_2003,w_2671/c_fill,w_480,h_358/q_auto,f_auto/redbullcom/2022/12/19/ndpy1wrtqgmj9vqzasgi/red-bull-magnitude" alt="redbull photot" className="image" />
            </div>
            {/* title */}
            {/* paragraph */}
            {/* bottom left- genre or redbull bulletin logo */}
            {/* bottom right- time to read */}
            <div className="body-container">
            <p className="header">7 best surf competitions in the world</p>
            <p className="summary"> From massive barrel riding to big waves to airs in a pool, there are as...</p>
            <div className="bottom">
            <p className="tag">SURFING</p>
            <p className="read-Time">7 min read</p>
            </div>
            </div>
        </div>
    )
}

export default Card