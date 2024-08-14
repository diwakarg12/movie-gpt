import { useState } from 'react';
import Header from './component/Header';
import EnjoyOnTv from './component/Home/EnjoyOnTv';
import Faq from './component/Home/Faq';
import HomeHero from './component/Home/HomeHero';
import KidProfile from './component/Home/KidProfile';
import ReadyToWatch from './component/Home/ReadyToWatch';
import { FaqLang } from './utility/langConstant';
import { useSelector } from 'react-redux';

function App() {
  const langKey = useSelector((store) => store.config.lang);
  const faqData = [
    {
      id: 1,
      Question: FaqLang[langKey].question1,
      Answer: FaqLang[langKey].answer1,
    },
    {
      id: 2,
      Question: FaqLang[langKey].question2,
      Answer: FaqLang[langKey].answer2,
    },
    {
      id: 3,
      Question: FaqLang[langKey].question3,
      Answer: FaqLang[langKey].answer3,
    },
    {
      id: 4,
      Question: FaqLang[langKey].question4,
      Answer: FaqLang[langKey].answer4,
    },
    {
      id: 5,
      Question: FaqLang[langKey].question5,
      Answer: FaqLang[langKey].answer5,
    },
    {
      id: 6,
      Question: FaqLang[langKey].question6,
      Answer: FaqLang[langKey].answer6,
    },
  ];
  const [showIndex, setShowIndex] = useState(null);

  return (
    <>
      <div className='w-full bg-gray-800'>
        <Header />
        <HomeHero />
        <EnjoyOnTv />
        {/* <DownloadShow /> */}
        {/* <WatchEveryWhere /> */}
        <KidProfile />
        <div className='text-white bg-black py-6 flex flex-col items-center justify-center'>
          <h1 className='md:text-6xl text-3xl font-bold py-4'>
            {FaqLang[langKey].heading}
          </h1>
          {faqData.map((faq, index) => (
            <Faq
              key={faq.id}
              faq={faq}
              show={index === showIndex ? true : false}
              setShowIndex={() =>
                showIndex === index ? setShowIndex(null) : setShowIndex(index)
              }
            />
          ))}
          <ReadyToWatch />
        </div>
      </div>
    </>
  );
}

export default App;
