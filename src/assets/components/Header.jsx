import logo from "../IMAGES/chef_1.png"
export default function Header(){
    return(
        <>
        <header>
            <img className="logo" src={logo} alt="logo"  />
            <span className="logo_text">ChefGPT</span>
        </header>
        </>
    )
}