import CardInfo from "./CardInfo";
import barcode from "./assets/barcode.jpeg";

// const Info = [
//   {
//     surName: "Akachukwu",
//     otherName: "Kelechi Vincent",
//     dateOfBirth: "18 &nbsp; Jan, &nbsp; 1990",
//     sex: "M",
//   },
// ];
function NinCard({ onAddForm, infors }) {
  console.log(infors);
  return (
    <div>
      <div className="grid grid-cols-3 rounded-lg px-4 ">
        <div className="col-span-2">
          <h1 className="text-green-700 uppercase font-bold text-lg">
            Federal Republic of Nigeria
          </h1>

          <h4 className="uppercase font-bold leading-none">digital Nin Slip</h4>
          <CardInfo infors={infors} onAddForm={onAddForm} />
        </div>

        <div className="col-span-1 flex flex-col items-center">
          <img src={barcode} alt="bar code" className="w-80  " />
          <h2 className="text-center font-bold text-lg">NGA</h2>
          <div>
            <h3 className="uppercase text-gray-400 px-4 ">
              <span className="text-center font-semibold">Issue date</span>
              <span className="block text-black font-bold">
                30 &nbsp; jun &nbsp;2020
              </span>
            </h3>
          </div>
        </div>
      </div>
      <div className="lg:px-20 px-8">
        <p className=" capitalize font-bold lg:px-8 text-sm lg:text-md ">
          National identification Number(NIN)
        </p>
        <h1 className=" capitalize font-bold text-md lg:text-4xl">
          2809 &nbsp; 023 &nbsp; 2908
        </h1>
      </div>
    </div>
  );
}
export default NinCard;
