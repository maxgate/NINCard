import QRCode from "react-qr-code";
import CardInfo from "./CardInfo";
import barcode from "./assets/barcode.jpeg";

function NinCard({ onAddForm, infors }) {
  console.log(infors);
  const date = new Date();

  const uniqueId = new Uint32Array(1);
  self.crypto.getRandomValues(uniqueId);

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
          {/* <img src={barcode} alt="bar code" className="w-80  " /> */}
          <QRCode value={-(uniqueId)} size={180} className="py-4"/>

          <h2 className="text-center font-bold text-lg">NGA</h2>

          <div>
            <h3 className="uppercase text-gray-400 px-4 ">
              <span className="text-center font-semibold">Issue date</span>
              <span className="block text-black font-bold">
                {`${date.getDate()}/ ${
                  date.getMonth() + 1
                }/ ${date.getFullYear()}`}
              </span>
            </h3>
          </div>
        </div>
      </div>
      <div className="lg:px-20 px-8">
        <p className=" capitalize font-bold lg:px- text-sm lg:text-lg text-gray-900 ">
          National identification Number(NIN)
        </p>
        <h1 className=" capitalize font-bold text-md lg:text-3xl px-8">
          {uniqueId}0
        </h1>
      </div>
    </div>
  );
}
export default NinCard;
