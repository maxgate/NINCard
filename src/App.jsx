import { useState } from "react";
import Button from "./Button";
import CardInfoForm from "./CardInfoForm";
import NinCard from "./NinCard";

function App() {
  const [infors, setInfors] = useState([]);
  const [ShowForm, setShowForm] = useState(false);

  function handleShowForm() {
    setShowForm((show) => !show);
  }

  function handleGenerateCard(infor) {
    const newInfo = [...infors, infor];
    setInfors(newInfo);
    setShowForm(false);
  }

  return (
    <>
      <div className="px-20 py-4 ">
        <Button onClick={handleShowForm}>
          {ShowForm ? "Close" : "Generate your NIN"}
        </Button>
        {ShowForm && (
          <CardInfoForm onAddForm={handleGenerateCard} infors={infors} />
        )}
      </div>

      <div className="  my-12  border   bg-white rounded-lg w-full lg:w-1/2 md:mx-auto">
        <NinCard onAddForm={handleGenerateCard} infors={infors} />
      </div>
    </>
  );
}

export default App;
