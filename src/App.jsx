// import './App.css'
import { useState } from 'react';
import Header from './component/Header';
import DownloadShow from './component/Home/DownloadShow';
import EnjoyOnTv from './component/Home/EnjoyOnTv';
import Faq from './component/Home/Faq';
import HomeHero from './component/Home/HomeHero';
import KidProfile from './component/Home/KidProfile';
import WatchEveryWhere from './component/Home/WatchEveryWhere';
import ReadyToWatch from './component/Home/ReadyToWatch';

function App() {
  const faqData = [
    {
      id: 1,
      Question: 'What is Netflix?',
      Answer:
        'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more - on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There`s always something new to discover, and new TV shows and movies are added every week!',
    },
    {
      id: 2,
      Question: 'How much does Netflix Cost?',
      Answer:
        'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.',
    },
    {
      id: 3,
      Question: 'Where can i Watch?',
      Answer:
        'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favourite shows with the iOS, Android, or Windows 10 app.',
    },
    {
      id: 4,
      Question: 'How do i cancel?',
      Answer:
        'Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees - start or stop your account anytime.',
    },
    {
      id: 5,
      Question: 'What can i watch on Netflix?',
      Answer:
        'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.',
    },
    {
      id: 6,
      Question: 'is Netflix Good for kids?',
      Answer:
        'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don`t want kids to see.',
    },
  ];
  const [showIndex, setShowIndex] = useState(null);

  return (
    <>
      <div className='w-full bg-gray-800'>
        <Header />
        <HomeHero />
        <EnjoyOnTv />
        <DownloadShow />
        <WatchEveryWhere />
        <KidProfile />
        <div className='text-white bg-black py-6 flex flex-col items-center justify-center'>
          <h1 className='text-6xl font-bold py-4'>
            Frequently Asked Questions
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
