import { assets } from '../../../assets/assets';

const StarRating = ({rating=3}) => {
  return (
    <div className="flex items-center">
      {Array.from({ length: 5 }, (_, index) => (
        <img
          key={index}
          src={rating > index ? assets.starIconFilled : assets.starIconOutlined}
          alt="star-icon"
          className="w-4 h-4"
        />
      ))}
    </div>
  );
};

export default StarRating;
