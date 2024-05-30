const ReadyToWatch = () => {
  return (
    <div className='text-white flex flex-col items-center justify-center py-12'>
      <p className='text-2xl font-medium py-4'>
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

export default ReadyToWatch;
