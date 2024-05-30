// import React from 'react'

const HomeHero = () => {
  return (
    <div className='bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_large.jpg)] bg-black bg-opacity-50 bg-blend-multiply flex flex-col items-center justify-start text-white pt-56 pb-56 w-auto'>
      <h1 className='text-[3.25rem] py-3 font-semibold'>
        Unlimited movies, TV shows and more
      </h1>
      <h2 className='text-3xl font-medium py-2 '>
        Watch anywhere. Cancel anytime.
      </h2>
      <p className='text-2xl py-2 font-medium'>
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className='flex flex-wrap'>
        <input
          type='email'
          name='email'
          className='py-2 w-[28rem] px-2 text-white text-xl font-medium bg-black bg-opacity-40 bg-blend-multiply placeholder:text-white border-2 rounded-sm'
          placeholder='Email*'
        />
        <button
          type='submit'
          className='text-2xl font-semibold mx-4 rounded-md w-52 h-14 bg-red-700'
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HomeHero;
