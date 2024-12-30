import React, {useState} from "react";
import trumcoin from "../../assets/icons/trumpcoinfull.png";
import faqbackground from "../../assets/icons/faqbackground.png";
import x from '../../assets/icons/x.png'
import scorpio from '../../assets/icons/scorpio.png'
import memecore from '../../assets/icons/memecore.png'



const descriptions = {
  memo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  brand: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  x: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  discord: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
};

const MenuItem = ({ icon, text, onClick, isActive, description }) => (
  <div className="mb-2">
    <div 
      className={`flex items-center justify-center w-full px-4 py-3 bg-gray-100/90 cursor-pointer rounded-lg ${isActive ? 'bg-gray-100/90 rounded-b-none' : ''}`}
      onClick={() => onClick(icon)}
    >
      <div className="w-6 h-6 flex items-center justify-center mr-3">
        {icon === 'discord' && (
          <div className="w-5 h-5 bg-indigo-500 rounded-xl" />
        )}
        {icon === 'brand' && (
          <div className="w-5 h-5 bg-blue-500 rounded-xl" />
        )}
        {icon === 'memo' && (
          <div className="w-5 h-5 bg-purple-500 rounded-xl" />
        )}
        {icon === 'x' && (
          <div className="w-5 h-5 bg-black rounded-xl" />
        )}
      </div>

      <span className="text-gray-800 text-2xl text-center ml-40 ">{text}</span>
      
      <div className="ml-auto">
        <svg 
          className={`w-5 h-5 text-gray-400 transform transition-transform ${isActive ? 'rotate-90' : ''}`}
          fill="none" 
          strokeWidth="2" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
    {isActive && (
      <div className="px-4 py-2 bg-gray-50/90 text-sm text-gray-600 rounded-b-lg  border-l-2 border-gray-200">
        {description}
      </div>
    )}
  </div>
);
const Faq = () => {

  const [activeItem, setActiveItem] = useState(null);

  const handleClick = (icon) => {
    setActiveItem(activeItem === icon ? null : icon);
  }
  

  return (
    <div id="faq" className=" w-full relative flex flex-col ">
      <h1
        style={{ fontFamily: "Irish Grover" }}
        className=" text-6xl text-black z-10 relative text-center mt-10 "
      >FAQ</h1>
      <div
        className="absolute inset-0 bg-cover bg-center bg-blue-400"
        style={{ backgroundImage: `url(${faqbackground})` }}
      ></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 w-full z-10 justify-center items-center">
        <div className="flex justify-center">
          <img src={trumcoin} height="600" width="500" alt="trumpimage" />
        </div>
        <div>
        <div className="w-85">
      <div className="  rounded-xl shadow-lg p-4 m-3">
        <div className="mb-3">

        
        <MenuItem 
          icon="memo" 
          text="MemoCom" 
          onClick={handleClick}
          isActive={activeItem === 'memo'}
          description={descriptions.memo}
        />
        </div>
        <MenuItem 
          icon="brand" 
          text="Brand guidelines" 
          onClick={handleClick}
          isActive={activeItem === 'brand'}
          description={descriptions.brand}
        />
        <MenuItem 
          icon="x" 
          text="X" 
          onClick={handleClick}
          isActive={activeItem === 'x'}
          description={descriptions.x}
        />
        <MenuItem 
          icon="discord" 
          text="Discord" 
          onClick={handleClick}
          isActive={activeItem === 'discord'}
          description={descriptions.discord}
        />
      </div>
    </div>
        </div>
        
      </div>
    </div>
  );
};

export default Faq;
