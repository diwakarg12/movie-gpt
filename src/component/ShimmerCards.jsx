import Simmer from './Simmer';

const ShimmerCards = () => {
  return (
    <div className='p-3'>
      <div className='mb-4 flex'>
        <div className='w-96 h-8 bg-gray-300 relative overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 bg-[length:200%_100%] animate-shimmer'></div>
        </div>
      </div>
      <div className='overflow-x-scroll flex gap-1.5 hide-scrollbar '>
        {[...Array(11)].map((_, index) => (
          <Simmer key={index} />
        ))}
      </div>
    </div>
  );
};

export default ShimmerCards;
