import {useState} from "react";
import ProjeP1 from "../assets/Project.png";
import ProjeP2 from "../assets/Project1.png";
import ProjeP3 from "../assets/Project2.png";
import HoverPortfolio from "./HoverPortfolio";

function PortfolioPanel() {
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);
  const [isActive5, setIsActive5] = useState(false);
  const [isActive6, setIsActive6] = useState(false);

  const handleMouseEnter = (func: Function) => {
    func(true);
  };
  const handleMouseLeave = (func: Function) => {
    func(false);
  };
  return (
    <div className="w-full grid grid-cols-3">
      <div
        className="portfolioCard"
        onMouseEnter={() => handleMouseEnter(setIsActive1)}
        onMouseLeave={() => handleMouseLeave(setIsActive1)}
        style={{
          backgroundImage: `url(${ProjeP1})`,
        }}
      >
        {isActive1 ? <HoverPortfolio /> : null}
      </div>
      <div
        className="portfolioCard"
        onMouseEnter={() => handleMouseEnter(setIsActive2)}
        onMouseLeave={() => handleMouseLeave(setIsActive2)}
        style={{
          backgroundImage: `url(${ProjeP2})`,
        }}
      >
        {isActive2 ? <HoverPortfolio /> : null}
      </div>

      <div
        className="portfolioCard"
        onMouseEnter={() => handleMouseEnter(setIsActive3)}
        onMouseLeave={() => handleMouseLeave(setIsActive3)}
        style={{
          backgroundImage: `url(${ProjeP3})`,
        }}
      >
        {isActive3 ? <HoverPortfolio /> : null}
      </div>
      <div
        className="portfolioCard"
        onMouseEnter={() => handleMouseEnter(setIsActive4)}
        onMouseLeave={() => handleMouseLeave(setIsActive4)}
        style={{
          backgroundImage: `url(${ProjeP2})`,
        }}
      >
        {isActive4 ? <HoverPortfolio /> : null}
      </div>
      <div
        className="portfolioCard"
        onMouseEnter={() => handleMouseEnter(setIsActive5)}
        onMouseLeave={() => handleMouseLeave(setIsActive5)}
        style={{
          backgroundImage: `url(${ProjeP3})`,
        }}
      >
        {isActive5 ? <HoverPortfolio /> : null}
      </div>
      <div
        className="portfolioCard"
        onMouseEnter={() => handleMouseEnter(setIsActive6)}
        onMouseLeave={() => handleMouseLeave(setIsActive6)}
        style={{
          backgroundImage: `url(${ProjeP1})`,
        }}
      >
        {isActive6 ? <HoverPortfolio /> : null}
      </div>
    </div>
  );
}

export default PortfolioPanel;
