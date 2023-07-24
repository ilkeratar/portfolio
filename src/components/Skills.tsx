import HtmlIcon from "../assets/html.png";
import NodeJSIcon from "../assets/nodejs.png";
import EngFlag from '../assets/engFlag.png';
import CssIcon from "../assets/css.png";
import BootstrapIcon from "../assets/bootstrap.png";
import FigmaIcon from "../assets/figma.png";
import GitIcon from "../assets/git.png";
import TailwindIcon from "../assets/tailwind.png";
import ReactIcon from "../assets/react.png";
import JSIcon from "../assets/js.png";
import TsIcon from "../assets/ts.png";
import GQLIcon from "../assets/graphql.png";
import MYSQLIcon from "../assets/mysql.png";


function Skills() {
  return (
    <div className="py-16 flex flex-col items-center justify-center" id="skills">
      <div className="w-[404px] h-[107px] flex items-center justify-center bg-opacity-0 border-8 border-black">
        <p className="font-Montserrrat text-center text-black text-2xl font-bold leading-10 tracking-widest">
          SKILLS
        </p>
      </div>
      <div className="w-[1050px] p-10">
        <h3 className="font-Montserrrat font-bold text-3xl tracking-widest mt-10">
          USING NOW:
        </h3>
        <div className="flex flex-row flex-wrap">
          <div className="w-1/4  py-9 flex flex-col  justify-center">
            <img src={HtmlIcon} alt="" className="w-[84px] h-[100px]" />
            <p className="mt-5 font-Montserrrat text-2xl tracking-wider">
              HTML5
            </p>
          </div>
          <div className="w-1/4  py-9 flex flex-col  justify-center">
            <img src={CssIcon} alt="" className="w-[84px] h-[100px]" />
            <p className="mt-5 font-Montserrrat text-2xl tracking-wider">
              CSS
            </p>
          </div>
          <div className="w-1/4 py-9 flex flex-col  justify-center ">
            <img src={BootstrapIcon} alt="" className="w-[84px] h-[100px]" />
            <p className="mt-5 font-Montserrrat text-2xl tracking-wider">
              BOOTSTRAP
            </p>
          </div>
          <div className="w-1/4  py-9 flex flex-col  justify-center">
            <img src={JSIcon} alt="" className="w-[84px] h-[100px]" />
            <p className="mt-5 font-Montserrrat text-2xl tracking-wider">
              JAVASCRIPT
            </p>
          </div>
          <div className="w-1/4  py-9 flex flex-col  justify-center ">
            <img src={ReactIcon} alt="" className="w-[84px] h-[100px]" />
            <p className="mt-5 font-Montserrrat text-2xl tracking-wider ">
              REACT
            </p>
          </div>
          <div className="w-1/4 py-9 flex flex-col  justify-center ">
            <img src={GitIcon} alt="" className="w-[84px] h-[100px]" />
            <p className="mt-5 font-Montserrrat text-2xl tracking-wider">
              GIT
            </p>
          </div>
          <div className="w-1/4 py-9 flex flex-col  justify-center ">
            <img src={TailwindIcon} alt="" className="w-[84px] h-[100px]" />
            <p className="mt-5 font-Montserrrat text-2xl tracking-wider">
              TAILWIND
            </p>
          </div>
          <div className="w-1/4  py-9 flex flex-col justify-center">
            <img src={FigmaIcon} alt="" className="w-[84px] h-[100px]" />
            <p className="mt-5 font-Montserrrat text-2xl tracking-wider">
              FIGMA
            </p>
          </div>
        </div>
        <h3 className="font-Montserrrat font-bold text-3xl tracking-widest mt-10">
          LEARNING:
        </h3>
        <div className="flex flex-row flex-wrap">
          <div className="w-1/4  py-9 flex flex-col  justify-center">
            <img src={NodeJSIcon} alt="" className="w-[84px] h-[100px]" />
            <p className="mt-5 font-Montserrrat text-2xl tracking-wider">
              NODEJS
            </p>
          </div>
          <div className="w-1/4  py-9 flex flex-col  justify-center">
            <img src={TsIcon} alt="" className="w-[84px] h-[100px]" />
            <p className="mt-5 font-Montserrrat text-2xl tracking-wider">
            TYPESCRIPT
            </p>
          </div>
          <div className="w-1/4 py-9 flex flex-col  justify-center ">
            <img src={MYSQLIcon} alt="" className="w-[84px] h-[100px]" />
            <p className="mt-5 font-Montserrrat text-2xl tracking-wider">
            MYSQL
            </p>
          </div>
          <div className="w-1/4  py-9 flex flex-col  justify-center">
            <img src={GQLIcon} alt="" className="w-[84px] h-[100px]" />
            <p className="mt-5 font-Montserrrat text-2xl tracking-wider">
            GRAPHQL
            </p>
          </div>
        </div>
        <h3 className="font-Montserrrat font-bold text-3xl tracking-widest mt-10">
          OTHER SKILLS:
        </h3>
        <div className="flex flex-row flex-wrap">
        <div className="w-1/4  py-9 flex flex-col  justify-center">
            <img src={EngFlag} alt="" className="w-[84px] h-[84px]" />
            <span className="mt-5 font-Montserrrat text-2xl tracking-wider">
            ENGLISH <p className="w-20 text-center">B2</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
