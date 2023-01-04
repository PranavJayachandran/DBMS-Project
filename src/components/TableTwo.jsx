import React from "react";
import { useState, useEffect } from "react";
import table2 from "../assets/table2pic.png";

export default function TableTwo() {
  const [month, setMonth] = useState("");
  const [admission, setAdmission] = useState("");
  const [roomrent, setRoomRent] = useState(0);
  const [messBill, setMessBill] = useState(0);
  const [extra, setExtra] = useState(0);
  const [total, setTotal] = useState(0);
  const [numberofDays, setNumberofDays] = useState(0);

  useEffect(() => {
    setTotal(roomrent + messBill + extra);
    if (
      month === "1" ||
      month === "3" ||
      month == "5" ||
      month === "7" ||
      month === "8" ||
      month === "10" ||
      month === "12"
    )
      setNumberofDays(31);
    else if (month === "4" || month === "6" || month == "9" || month === "11")
      setNumberofDays(30);
    else setNumberofDays(28);
  }, [messBill, month]);

  const handleSubmit = () => {
    setRoomRent(parseInt(numberofDays) * 125);
    setMessBill(parseInt(numberofDays) * 173);
    setExtra(500);
    setMonth("");
    setAdmission("");
  };

  return (
    <div>
      <div className="mx-10">
        <div className="flex rounded-3xl bg-[#9600CB] ">
          <div className=" pb-4 w-6/12 pl-36 pr-16 flex justify-center pt-10 ">
            <div className="w-full">
              <div className="text-white text-3xl text-left font-semibold pb-10">
                Generate mess bil
              </div>
              <div className="flex gap-8 mb-10 ">
                <div className="text-lg text-white">Admssion No</div>
                <input
                  className="text-white px-2 py-1 flex-auto bg-[#9600CB] border-2 rounded-lg"
                  value={admission}
                  onChange={(e) => setAdmission(e.target.value)}
                ></input>
              </div>
              <div className="flex gap-8 mb-10">
                <div className="text-lg text-white">Month</div>
                <input
                  className="text-white px-2 py-1 flex-auto bg-[#9600CB] border-2 rounded-lg"
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                ></input>
              </div>
              <div className="flex justify-center ">
                <div
                  className="bg-white font-bold px-4 text-lg rounded-md hover:bg-black hover:text-white cursor-pointer transition duration-300"
                  onClick={handleSubmit}
                >
                  Submit
                </div>
              </div>
            </div>
          </div>
          <div className="w-6/12 flex  flex-1">
            <div className="border-l-2 px-20 my-10">
              <div className="text-white text-3xl text-left font-semibold pb-10">
                Mess Bill
              </div>
              <div className="text-white text-left mb-4 text-lg flex gap-4">
                <div>Room Rent :</div>
                <div>{roomrent !== 0 ? roomrent : ""}</div>
              </div>
              <div className="text-white text-left mb-4 text-lg flex gap-4">
                <div>Mess Bill :</div>
                <div>{messBill !== 0 ? messBill : ""}</div>
              </div>
              <div className="text-white text-left mb-4 text-lg flex gap-4">
                <div>Extra :</div>
                <div>{extra !== 0 ? extra : ""}</div>
              </div>
              <div className="text-white text-left mb-4 text-lg flex gap-4">
                <div>Total amount to be payable :</div>
                <div>{total !== 0 ? total : ""}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
