// import React from 'react'

import { useRef } from 'react';
import { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import validateUser from '../utility/validate';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../utility/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utility/userSlice';
import Header from './Header';
import toast from 'react-hot-toast';
import { BG_IMG } from '../utility/constant';
const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = validateUser(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isLogin) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
              toast.success('User Created with ' + user.email);
              // nevigate('/browse');
            })
            .catch((error) => {
              toast.error(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          toast.error(errorCode);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          toast.success('User LoggedIn with ' + user.email);
          // nevigate('/browse');
        })
        .catch((error) => {
          const errorCode = error.code;
          toast.error(errorCode);
        });
    }
  };

  return (
    <div className={`w-full h-[110vh] bg-[url(${BG_IMG})] bg-black bg-opacity-50 bg-blend-multiply relative`}>
      <Header />
      <div className='w-1/3 rounded-sm text-white left-1/3 top-32 bg-black bg-opacity-70 bg-blend-multiply py-8 absolute'>
        <h1 className='text-4xl  font-semibold pl-16 pb-4'>
          {isLogin ? 'SIGNIN' : 'SIGNUP'}
        </h1>
        <form
          action=''
          onSubmit={handleSubmit}
          className='flex flex-col items-center justify-center'
        >
          {!isLogin && (
            <input
              type='text'
              name='name'
              ref={name}
              placeholder='Name*'
              className='w-3/4 px-2 py-3 bg-transparent border-2 border-gray-500 rounded-sm my-3 placeholder:text-white font-medium'
            />
          )}
          <input
            type='email'
            name='email'
            ref={email}
            placeholder='Email*'
            className='w-3/4 px-2 py-3 bg-transparent border-2 border-gray-500 rounded-sm my-3 placeholder:text-white font-medium'
          />
          <input
            type='password'
            name='password'
            ref={password}
            placeholder='Password*'
            className='w-3/4 px-2 py-3 bg-transparent border-2 border-gray-500 rounded-sm my-3 placeholder:text-white font-medium '
          />
          {errorMessage && (
            <p className='text-red-500 -ml-44 font-medium text-lg '>
              {errorMessage}
            </p>
          )}
          <button
            type='submit'
            className='w-3/4 bg-red-600 py-2 my-3 hover:bg-red-800 hover:text-gray-300 rounded-sm font-semibold text-white text-lg'
          >
            {isLogin ? 'Login' : 'Register'}
          </button>
          <p
            className='ml-24 cursor-pointer hover:text-blue-600 hover:underline'
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin
              ? 'New user ? Register Here'
              : 'Already have an Account? Login Here'}
          </p>
        </form>
        <p className='text-xl font-semibold text-center py-4'>OR</p>
        <div className='w-3/4 border-2 m-auto flex items-center justify-center py-3 rounded-sm my-3 hover:text-red-500'>
          <FaGoogle className='text-2xl' />{' '}
          <span className='px-4 font-[550] text-lg'>Login with Google</span>
        </div>
        <div className='w-3/4 border-2 m-auto flex items-center justify-center py-3 rounded-sm my-3 hover:text-red-500'>
          <FaGithub className='text-2xl' />{' '}
          <span className='px-4 font-[550] text-lg'>Login with Github</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
