import { Link } from 'react-router-dom';

const Card = ({ icon, title, value, backgroundColor, link }) => {
  return (
    <div className="w-full">
      <Link to={link || '#'}>
        <div
          className={`w-[255px] h-[157px] m-[30px] rounded-lg ${backgroundColor}`}
        >
          <div className="pl-5 pt-5">{icon}</div>
          <h2 className="pl-5 text-neutral-500 text-sm font-medium">{title}</h2>
          <p className="pr-5 pb-5 flex justify-end text-black text-[30px] font-bold">
            {value}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
