import image from "./assets/image.png";

const CardInfo = ({ infors }) => {
  console.log(infors);

  return (
    <div className="py-4 flex flex-row ">
      <img src={image} alt="user image" className=" w-20 h-20 rounded-xl   " />
      <div className="px-4">
        <h3 className="uppercase text-gray-600 font-semibold">
          surname/Nom
          <span className="block text-black font-bold">{infors.surName}</span>
        </h3>
        <h3 className="uppercase text-gray-400 font-semibold">
          Given Names/PreNoms
          <span className="block text-black font-bold">{infors.otherName}</span>
        </h3>
        <div className="flex">
          <h3 className="uppercase text-gray-400">
            <span className="font-semibold">Date of birth</span>
            <span className="block text-black font-bold">
              {infors.dateOfBirth.toDateString()}
            </span>
          </h3>
          <h3 className="uppercase text-gray-400 px-4">
            <span className="font-semibold">sex/sexe</span>
            <span className="block text-black font-bold">{infors.sex}</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
