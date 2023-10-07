import "./styles.css"

const Header =() =>{
    return(
        <>
            <div className="header-container">
               <img src="https://www.svgrepo.com/show/126271/restaurant-icon.svg" alt="restaurant icon"/>
                <ul className="header-menu">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contanct us</li>
                    <li>Card</li>
                </ul>
            </div>
        </>
    )
}
export default Header