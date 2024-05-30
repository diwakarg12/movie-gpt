import { Link, useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utility/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utility/userSlice';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

const Header = () => {
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

  return (
    <div className='flex  absolute left-0 right-0 items-center justify-between p-4'>
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
          <div
            className='flex text-white items-center cursor-pointer'
            onClick={handleLogout}
          >
            <img
              src='https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg'
              alt='Profile icon'
              className='w-10 h-10 rounded-lg'
            />
            <p className='text-white text-lg font-semibold'>(Logout)</p>
          </div>
        ) : (
          <div className='flex items-center justify-center gap-10'>
            <div>
              <select
                name='language'
                className='py-1 px-3 bg-transparent text-white text-lg font-medium border-2 border-gray-300 rounded-sm'
              >
                <option value='english'>English</option>
                <option value='hindi'>Hindi</option>
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
