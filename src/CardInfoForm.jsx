import { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Button from "./Button";

const CardInfoForm = ({ onAddForm }) => {
  const [surName, setSurName] = useState("");
  const [otherName, setOtherName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [sex, setSex] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!surName || !otherName || !dateOfBirth || !sex) {
      return;
    }
    const newInfo = {
      surName,
      otherName,
      dateOfBirth,
      sex,
    };
    onAddForm(newInfo);

    setSurName("");
    setOtherName("");
    setDateOfBirth("");
    setSex("");
  }
  return (
    <form
      className="flex flex-col mx-auto w-80 border bg-[#FFF4E6] my-8 "
      onSubmit={handleSubmit}
    >
      <h2 className="text-center uppercase font-bold text-lg py-6">
        Input your details
      </h2>

      <div className="flex py-4 px-6">
        <label className="text-center capitalize font-bold ">Surname</label>
        <input
          type="text"
          value={surName}
          onChange={(e) => setSurName(e.target.value)}
          className="w-40 mx-auto rounded-md"
        />
      </div>

      <div className="flex py-4 px-6">
        <label className="text-center capitalize font-bold ">other names</label>
        <input
          type="text"
          value={otherName}
          onChange={(e) => setOtherName(e.target.value)}
          className="w-40 mx-auto rounded-md"
        />
      </div>

      <div className="flex py-4 ">
        <label className="text-center capitalize font-bold   px-4">
          Date of Birth
        </label>
        {/* <input
          type="text"
          value={dateOfBirth}
          // onChange={(e) => setDateOfBirth(e.target.value)}

          className="w-40 mx-auto rounded-md "
        /> */}
        {
          <DatePicker
            selected={dateOfBirth}
            onChange={(date) => setDateOfBirth(date.target.value)}
            className="w-40 mx-auto rounded-md "
          />
        }
      </div>

      <div className="flex py-4">
        <label className="text-center capitalize font-bold  px-14">sex</label>
        <input
          type="text"
          value={sex}
          onChange={(e) => setSex(e.target.value)}
          className="w-40 mx-auto rounded-md"
        />
      </div>

      <Button>Create</Button>
    </form>
  );
};

export default CardInfoForm;
