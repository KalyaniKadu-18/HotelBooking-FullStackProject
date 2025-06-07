import { useNavigate } from 'react-router-dom';
import { roomsDummyData } from '../../../assets/assets';
import HeroCard from '../HeroCard/HeroCard';
import Title from '../Title/title';

const FeaturedDestination = () => {

  const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20 '>

    <Title title='Featured Destionation' subTitle='Discover our handpicked selection of the exceptional properties around the world, 
    offering unparalleled luxury and unforgettable experiences.'/>

      <div className='flex flex-wrap items-center justify-center gap-6 mt-20'>
        {roomsDummyData.slice(0,4).map((room,index) => (
            <HeroCard key={room._id} room={room} index={index}/>
        ))}
      </div>
      <button 
      onClick={() => {navigate('/rooms'); scrollTo(0,0)}}
      className='my-16 px-4 py-2 text-sm font-medium  border border-gray-300  rounded 
      bg-white hover:bg-gray-50 transition-all cursur-pointer'>View All Destinations</button>
    </div>
  )
}

export default FeaturedDestination
