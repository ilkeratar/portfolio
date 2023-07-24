import DoubleArrow from '../assets/doubleArrow.svg';
import  {AiOutlineFacebook,AiOutlineLinkedin,AiOutlineInstagram,AiOutlineMail} from 'react-icons/ai'; 
function Footer() {
  return (
    <div className="w-full h-[326px] bg-[#1A1A1A] flex flex-col items-center justify-center text-white gap-y-10">
        <a href='#main_content'>
        <img src={DoubleArrow} alt="" className='mx-auto mb-2' />
        <p className='tracking-widest font-Montserrrat font-bold text-sm'>BACK TO TOP</p>
        </a>
        
        <div className='flex gap-x-4'>
            <AiOutlineFacebook size={30}/>
            <AiOutlineLinkedin size={30}/>
            <AiOutlineInstagram size={30}/>
            <AiOutlineMail size={30}/>
        </div>
        <span className='font-Montserrrat font-bold'>@2023 Ilker Atar <span className='font-normal'>All Rights Reserved.</span> </span>
    </div>
  )
}

export default Footer