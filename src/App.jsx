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
    setShowCard(false);
  }

  function handleGenerateCard(infor) {
    const newInfo = infor;
    setInfors(newInfo);
    setShowForm(!ShowForm);
    setShowCard((show) => !show);
  }

  return (
    <>
      <div className="text-center font-bold pt-4">
        <p className="text-gray-100 text-2xl pb-2">
          Welcome to NIN Generating Site
        </p>
        <Button onClick={handleShowForm}>
          {ShowForm ? "Close" : "Click Here to proceed"}
        </Button>
      </div>

      <div className="">
        <div className="px-6 pt-">
          {ShowForm && (
            <CardInfoForm onAddForm={handleGenerateCard} infors={infors} />
          )}
        </div>

        <div className="  my-8 bg-white rounded-lg w-full lg:w-1/2 md:mx-auto">
          {showCard && (
            <NinCard onAddForm={handleGenerateCard} infors={infors} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
