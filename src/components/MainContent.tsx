
import  Pp  from "../assets/m2.jpg";
import {AiFillMail,AiFillGithub,AiFillLinkedin} from 'react-icons/ai';

function MainContent() {
  return (
    <div className="w-full relative py-20 z-10" id="main_content">
      <div className="flex items-center py-36 justify-center gap-x-52">
        <div>
          <h3 className="text-black text-[40px] text-shadow-xl font-Raleway font-extrabold">Hi, I am</h3>
          <h1 className="text-black text-7xl font-bold ">Ilker Atar</h1>
          <p className="text-gray-500 text-lg font-extrabold ">Software Developer</p>
          <div className="flex space-x-5 mt-14">
            <a href="mailto: ilkerrxr@windowslive.com" className="bg-iconBox w-16 h-14 flex items-center justify-center shadow-[0_5px_5px_0px_rgba(0,0,0,0.2)]">
                <AiFillMail size={37}/>
            </a>
            <a href="https://github.com/ilkeratar" className="bg-iconBox w-16 h-14 flex items-center justify-center shadow-[0_5px_5px_0px_rgba(0,0,0,0.2)]">
                <AiFillGithub size={37}/>
            </a>
            <a href="https://www.linkedin.com/in/ilker-atar-828a21160/" className="bg-iconBox w-16 h-14 flex items-center justify-center shadow-[0_5px_5px_0px_rgba(0,0,0,0.2)]">
                <AiFillLinkedin size={37}/>
            </a>
          </div>
        </div>
        <div>
          <img src={Pp} alt="my_profile" className="border-8 mx-auto border-white rounded-full w-56 center "/>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
