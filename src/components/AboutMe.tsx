import WideLogo from '../assets/separatorBlack1.png';
import Design from "../assets/design.png";
import Development from "../assets/development.png";
import Maintenance from "../assets/maintenance.png";

function AboutMe() {
  return (
    <div className='relative z-10' id='about'>
      <div className="py-14 flex flex-col items-center justify-center gap-y-16">
        <div className="w-[404px] h-[107px] flex items-center justify-center bg-opacity-0 border-8 border-black">
          <p className="font-Montserrrat text-center text-black text-2xl font-bold leading-10 tracking-widest">
            ABOUT ME
          </p>
        </div>
        <p className="text-center text-sm text-[#050505] w-[763px] ">
          {" "}
          Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
          varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
          quis libero viverra facilisis ut ac est.
        </p>
        <a
          href="#"
          className="tracking-wide py-1 px-4 border-r-2 border-l-2 border-black w-max font-Montserrrat font-semibold text-xs"
        >
          EXPLORE
        </a>
        <img src={WideLogo} alt="asf" className="w-44 h-3" />
      </div>
      <div className="w-[1066px] mx-auto flex flex-wrap items-center justify-center ">
        <div className='w-[516px] h-[177px] gap-y-4 relative'>
          <img src={Design} alt="" className='absolute top-[-20px] left-[40px] z-0'/>
          <h3 className='w-[431px] ml-auto font-Montserrrat font-bold text-[22px]'>DESIGN</h3>
          <p className='font-light w-[431px] ml-auto'>
            I can design the site based on your needs and suggestions. I can
            also design the site from scratch and consult you during the job.
          </p>
        </div>
        <div className=' w-[516px] h-[177px] gap-y-4 relative'>
        <img src={Development} alt="" className='absolute top-[-20px] left-[40px] z-0'/>
          <h3 className='w-[431px] ml-auto font-Montserrrat font-bold text-[22px]'>DEVELOPMENT</h3>
          <p className='font-light  w-[431px] ml-auto'>
            I can design the site based on your needs and suggestions. I can
            also design the site from scratch and consult you during the job.
          </p>
        </div>
        <div className=' w-[516px] h-[177px] gap-y-4 relative'>
        <img src={Maintenance} alt="" className='absolute top-[-20px] left-[40px] z-0'/>
          <h3 className='w-[431px] ml-auto font-Montserrrat font-bold text-[22px]'>MAINTENANCE</h3>
          <p className='font-light  w-[431px] ml-auto'>
            I can design the site based on your needs and suggestions. I can
            also design the site from scratch and consult you during the job.
          </p>
        </div>
      </div>
      <img src={WideLogo} alt="asf" className="mx-auto w-44 h-3" />
    </div>
  );
}

export default AboutMe