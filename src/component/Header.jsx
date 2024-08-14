import { Link, useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utility/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utility/userSlice';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { toggleGptSearch } from '../utility/gptSlice';
import { PROFILE_LOGO, SUPPORTED_LANG } from '../utility/constant';
import { changeLanguage } from '../utility/configSlice';

const Header = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        toast.success('Logged out successfully');
        navigate('/');
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate('/browse');
      } else {
        dispatch(removeUser());
        // navigate('/login');
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGPTSeach = () => {
    dispatch(toggleGptSearch());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className='flex  absolute z-10 left-0 right-0 items-center justify-between p-4 bg-gradient from-purple-600 via-pink-600 to-blue-600'>
      <div className='flex items-center md:-ml-0 md:mr-0 mr-6 -ml-12'>
        <Link to='/'>
          <img src='./logo.png' alt='Logo' className='md:w-72 w-64 pl-12' />
          {/* <h1 classNam/.//e='text-4xl font-bold text-white'>Movie Match</h1> */}
        </Link>
      </div>
      <div className=''>
        {user ? (
          <div className='flex gap-6'>
            {showGptSearch && (
              <select
                className='bg-transparent md:relative absolute md:top-0 top-20 right-4 md:py-3 py-2 text-white md:text-base text-xl font-semibold border-2 rounded-md focus:outline-none px-6'
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANG.map((lang) => (
                  <option
                    className='text-black'
                    key={lang.identifier}
                    value={lang.identifier}
                  >
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <button
              onClick={handleGPTSeach}
              className='bg-purple-700 text-white px-3 rounded-sm'
            >
              {showGptSearch ? 'Browse Page' : 'GPT Search'}
            </button>
            <div
              className='flex text-white items-center cursor-pointer'
              onClick={handleLogout}
            >
              <div>
                <img
                  src={PROFILE_LOGO}
                  alt='Profile icon'
                  className='w-10 h-10 rounded-lg relative'
                />
                <p className='md:hidden block absolute top-10 font-semibold'>
                  Logout
                </p>
              </div>
              <button className='text-white bg-[#1fc386] px-4 py-1.5 rounded-sm text-lg font-semibold md:block hidden'>
                Logout
              </button>
            </div>
          </div>
        ) : (
          <div className='flex items-center justify-center md:gap-10 gap-4'>
            <div>
              <select
                className='bg-transparent text-white font-semibold border-2 rounded-sm focus:outline-none px-3 py-2'
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANG.map((lang) => (
                  <option
                    className='text-black'
                    key={lang.identifier}
                    value={lang.identifier}
                  >
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <Link
                to='/login'
                className='bg-[#1fc386] hover:bg-green-700 py-3 px-4 rounded-sm text-white text-base font-semibold'
              >
                Sign In
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
