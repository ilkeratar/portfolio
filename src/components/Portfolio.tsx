import { useState } from 'react';
import BGHeader from '../assets/imageBG.png';
import PortfolioPanel from './PortfolioPanel';


function Portfolio() {
  const [currentTab, setCurrentTab] = useState('portfolio');
  
  
  return (
    <div id="portfolio">
      <div
        className="w-full h-80"
        style={{
          backgroundImage: `url(${BGHeader})`,
        }}
      >
        <div className="w-full h-full flex items-center justify-center bg-black bg-opacity-30">
          <div className="w-[404px] h-[107px] flex items-center justify-center bg-opacity-0 border-8 border-black">
            <p className="font-Montserrrat text-center text-black text-2xl font-bold leading-10 tracking-widest">
              PORTFOLIO
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#1A1A1A] flex flex-col items-center justify-center ">
        <div className="flex flex-row w-[587px] py-6">
          <button onClick={() => setCurrentTab('portfolio')} className={`portfolioTab ${currentTab === 'portfolio' ? 'text-white' : 'tabDefault'}`}>
            <p className="text-sm font-semibold font-Montserrrat py-3">ALL</p>
          </button>
          <button onClick={() => setCurrentTab('pokedex')} className={`portfolioTab ${currentTab === 'pokedex' ? 'text-white' : 'tabDefault'}`}>
            <p className="text-sm font-semibold font-Montserrrat  py-3">
              POKEDEX
            </p>
          </button>
        </div>
        {currentTab === 'portfolio' ? <PortfolioPanel /> : <h1>asfas</h1>}
        <p className=" font-Montserrrat font-semibold text-xl tracking-wide text-white p-10">
          And many more to come!
        </p>
      </div>
    </div>
  );
}

export default Portfolio