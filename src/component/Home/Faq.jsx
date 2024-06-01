/* eslint-disable react/prop-types */
import { IoIosArrowDown } from 'react-icons/io';

const Faq = ({faq, show, setShowIndex }) => {
  const handleShowFaq = () => {
    setShowIndex();
  };

  return (
    <div className='md:w-4/5 w-11/12'>
      <div className='cursor-pointer my-1 shadow-xl'>
        <div
          className='flex justify-between items-center h-20 mb-[2px] px-4 bg-[#2D2D2D]'
          onClick={handleShowFaq}
        >
          <h2 className='font-oswald md:text-2xl text-xl font-semibold '>
            {faq.Question}
          </h2>
          <IoIosArrowDown
            className={`md:text-3xl text-2xl ${
              show ? 'rotate-180' : 'rotate-0'
            } transition-all duration-300`}
          />
        </div>
        <p
          className={`flex font-medium md:text-2xl text-xl px-4 md:h-40 h-80 text-white items-center justify-center bg-[#2D2D2D] ${
            show ? 'max-h-screen' : 'max-h-0'
          } font-avenir overflow-hidden transition-all duration-300`}
        >
         {faq.Answer}
        </p>
      </div>
    </div>
    
  );
};

export default Faq;
