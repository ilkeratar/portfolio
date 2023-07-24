import logo from "../assets/logo1.png";
import {Link} from "react-scroll";

function Navbar() {
  window.addEventListener("scroll",function(){
    const navLogo =document.getElementById("navLogo");
    const navbar =document.getElementById("navbar");
    const navMenu =document.getElementById("navMenu");
    if(navLogo && navMenu){
      if(this.scrollY >= 80){
        navLogo.classList.add("nav_logo");
        navMenu.classList.add("nav_menu");
        navbar?.classList.add("nav_features");
      } 
      else{
        navLogo.classList.remove("nav_logo");
        navMenu.classList.remove("nav_menu");
        navbar?.classList.remove("nav_features");
      } 
    }
    
});

  return (
    <div className='flex items-center justify-between mx-auto w-2/3 py-10 fixed top-0 left-0 right-0 z-30' id="navbar">
      <div className="flex items-center"  id="navLogo">
        <img src={logo} alt="" />
      </div>
      <div className="flex space-x-12" id="navMenu">
        <Link to="about" smooth={true} duration={1000} className='text-white cursor-pointer self-center font-Montserrrat font-bold text-[17px]'>About me</Link>
        <Link to="skills" smooth={true} duration={1000} className='text-white cursor-pointer self-center font-Montserrrat font-bold text-[17px]'>Skills</Link>
        <Link to="portfolio" smooth={true} duration={1000} className='text-white cursor-pointer self-center font-Montserrrat font-bold text-[17px]'>Portfolio</Link>
        <Link to="contact" smooth={true} duration={1000} className='bg-white cursor-pointer px-5 py-3 rounded-full text-black font-Montserrrat font-bold text-[17px]'>CONTACT ME</Link>
      </div>
    </div>
  )
}

export default Navbar