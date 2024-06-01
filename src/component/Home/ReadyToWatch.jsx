import { useSelector } from 'react-redux';
import { ReadyToWatchLang } from '../../utility/langConstant';

const ReadyToWatch = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className='text-white flex flex-col items-center justify-center py-12'>
      <p className='md:text-2xl text-xl md:w-full w-11/12 text-wrap font-medium py-4'>
        {ReadyToWatchLang[langKey].text}
      </p>
      <div className='flex'>
        <input
          type='email'
          name='email'
          className='py-2 md:w-[28rem] w-[14rem] px-2 text-white text-xl font-medium bg-black bg-opacity-40 bg-blend-multiply placeholder:text-white border-2 rounded-sm'
          placeholder={ReadyToWatchLang[langKey].emailPlaceholder}
        />
        <button
          type='submit'
          className='md:text-2xl text-xl font-semibold md:mx-4 mx-2 rounded-md md:w-52 w-24 h-14 bg-red-700'
        >
          {ReadyToWatchLang[langKey].button}
        </button>
      </div>
    </div>
  );
};

export default ReadyToWatch;
