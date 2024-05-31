import { Link, useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utility/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utility/userSlice';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { toggleGptSearch } from '../utility/gptSlice';
import { SUPPORTED_LANG } from '../utility/constant';
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
    <div className='flex  absolute z-10 left-0 right-0 items-center justify-between p-4'>
      <div className='flex items-center'>
        <Link to='/'>
          <img
            src='https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460'
            alt='Logo'
            className='w-48 pl-12'
          />
        </Link>
        {user && (
          <div className='flex space-x-6 text-white ml-20'>
            <Link
              to='/browse'
              className='text-lg font-medium hover:text-red-500 hover:underline'
            >
              Home
            </Link>
            <Link
              to='/browse'
              className='text-lg font-medium hover:text-red-500 hover:underline'
            >
              New Movies
            </Link>
            <Link
              to='/browse'
              className='text-lg font-medium hover:text-red-500 hover:underline'
            >
              Trending
            </Link>
            <Link
              to='/browse'
              className='text-lg font-medium hover:text-red-500 hover:underline'
            >
              About
            </Link>
            <Link
              to='/browse'
              className='text-lg font-medium hover:text-red-500 hover:underline'
            >
              Contact
            </Link>
          </div>
        )}
      </div>
      <div className=''>
        {user ? (
          <div className='flex gap-6'>
            {showGptSearch && (
              <select
                className='bg-transparent text-white font-semibold border-2 rounded-md focus:outline-none px-2'
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
              <img
                src='https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg'
                alt='Profile icon'
                className='w-10 h-10 rounded-lg'
              />
              <button className='text-white bg-red-700 px-4 py-1.5 rounded-sm text-lg font-semibold'>
                Logout
              </button>
            </div>
          </div>
        ) : (
          <div className='flex items-center justify-center gap-10'>
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
                className='bg-red-600 hover:bg-red-800 py-2 px-4 rounded-sm text-white text-base font-semibold'
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
