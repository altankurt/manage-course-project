const Card = ({ icon, title, value, backgroundColor }) => {
  return (
    <div className="w-full">
      <div
        className={`w-[255px] h-[157px] m-[30px] rounded-lg ${backgroundColor}`}
      >
        <svg className="pl-5 pt-5">{icon}</svg>
        <h2 className="pl-5 text-neutral-500 text-sm font-medium">{title}</h2>
        <p className="pr-5 pb-5 flex justify-end text-black text-[30px] font-bold">
          {value}
        </p>
      </div>
    </div>
  );
};

export default Card;
