import { useEffect, useState } from "react";
import Button from "./Button";
import CardInfoForm from "./CardInfoForm";
import NinCard from "./NinCard";

function App() {
  const [infors, setInfors] = useState({});
  const [ShowForm, setShowForm] = useState(false);
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    setShowForm((show) => !show);
  }, []);
  function handleShowForm() {
    setShowForm((show) => !show);
  }

  function handleGenerateCard(infor) {
    const newInfo = infor;
    setInfors(newInfo);
    setShowForm(!ShowForm);
    setShowCard(!showCard);
  }

  return (
    <>
      <div className="text-center font-bold pt-4">
        <p className="text-gray-100 text-2xl pb-4">Welcome to NIN Generating Site</p>
        <Button onClick={handleShowForm}>
          {ShowForm ? "Close" : "Click Here to proceed"}
        </Button>
      </div>
      <div className="px-6 pt-4 ">
        {ShowForm && (
          <CardInfoForm onAddForm={handleGenerateCard} infors={infors} />
        )}
      </div>

      <div className="  my-12  bg-white rounded-lg w-full lg:w-1/2 md:mx-auto">
        {showCard && <NinCard onAddForm={handleGenerateCard} infors={infors} />}
      </div>
    </>
  );
}

export default App;
