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
import { LoginLang } from '../utility/langConstant';
import { useSelector } from 'react-redux';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const langKey = useSelector((store) => store.config.lang);
  const [isLogin, setIsLogin] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
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
    <div
      className='w-full h-[110vh] bg-black bg-opacity-50 bg-blend-multiply relative'
      style={{ backgroundImage: `url(${BG_IMG})` }}
    >
      <Header />
      <div className='md:w-1/3 w-full rounded-sm text-white md:left-1/3 left-0 top-32 bg-black bg-opacity-70 bg-blend-multiply py-8 absolute'>
        <h1 className='text-4xl  font-semibold md:pl-16 pl-4 pb-4'>
          {isLogin ? LoginLang[langKey].signin : LoginLang[langKey].signup}
        </h1>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col items-center justify-center'
        >
          {!isLogin && (
            <input
              type='text'
              name='name'
              ref={name}
              placeholder={LoginLang[langKey].namePlaceholder}
              className='md:w-3/4 w-11/12 px-2 py-3 bg-transparent border-2 border-gray-500 rounded-sm my-3 placeholder:text-white font-medium'
            />
          )}
          <input
            type='email'
            name='email'
            ref={email}
            placeholder={LoginLang[langKey].emailPlaceholder}
            className='md:w-3/4 w-11/12 px-2 py-3 bg-transparent border-2 border-gray-500 rounded-sm my-3 placeholder:text-white font-medium'
          />
          <input
            type={showPassword ? 'text' : 'password'}
            name='password'
            ref={password}
            placeholder={LoginLang[langKey].passwordPlaceholder}
            className='md:w-3/4 w-11/12 px-2 py-3 bg-transparent border-2 border-gray-500 rounded-sm my-3 placeholder:text-white font-medium '
          />
          <span
            className={
              !isLogin
                ? 'absolute right-20 top-[16.5rem] cursor-pointer'
                : 'absolute right-20 top-[11.7rem] cursor-pointer'
            }
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <FaEye className='text-2xl' />
            ) : (
              <FaEyeSlash className='text-2xl' />
            )}
          </span>

          {errorMessage && (
            <p className='text-red-500 md:-ml-44 -ml-48 font-medium text-lg '>
              {errorMessage}
            </p>
          )}
          <button
            type='submit'
            className='md:w-3/4 w-11/12 bg-[#1fc386] py-2 my-3 hover:bg-green-700 hover:text-gray-300 rounded-sm font-semibold text-white text-lg'
          >
            {isLogin ? LoginLang[langKey].signin : LoginLang[langKey].signup}
          </button>
          <p
            className='ml-24 cursor-pointer hover:text-blue-600 hover:underline'
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? LoginLang[langKey].login : LoginLang[langKey].register}
          </p>
        </form>
        <p className='text-xl font-semibold text-center md:py-4 py-6'>
          {LoginLang[langKey].or}
        </p>
        <div className='md:w-3/4 w-11/12 border-2 m-auto flex items-center justify-center py-3 rounded-sm my-3 hover:text-red-500'>
          <FaGoogle className='text-2xl' />{' '}
          <span className='px-4 font-[550] text-lg'>
            {LoginLang[langKey].google}
          </span>
        </div>
        <div className='md:w-3/4 w-11/12 border-2 m-auto flex items-center justify-center py-3 rounded-sm my-3 hover:text-red-500'>
          <FaGithub className='text-2xl' />{' '}
          <span className='px-4 font-[550] text-lg'>
            {LoginLang[langKey].github}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
