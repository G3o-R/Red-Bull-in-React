import "../styles/NavPill.scss"

function NavPill(){
    return(
        <div className="navPill">
  {/* menu nav "tv events athletes Products" */}
            <div className="nav-content">TV</div>
            <div className="nav-content">Events</div>
            <div className="nav-content">Athletes</div>
            <div className="nav-content">Products</div>

        </div>
    )
}
export default NavPill