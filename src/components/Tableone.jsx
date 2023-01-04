import React from "react";
import { useState } from "react";
import table1 from "../assets/table1pic.png";

export default function Tableone() {
  const [name, setName] = useState("");
  const [admissionNo, setAdmissionNo] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");
  const [doa, setDoa] = useState("");
  const [category, setCategory] = useState("");
  const [roomno, setRoomNo] = useState("");
  const handleSubmit = async () => {
    console.log(name, admissionNo, branch, year, doa, category);
    const data = { admissionNo, name, year, branch, category, doa, roomno };
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      admn_no: admissionNo,
      name: name,
      year: year,
      branch: branch,
      category: category,
      date_of_admn: doa,
      room_no: roomno,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://dbms-api-woad.vercel.app/inmates", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));

    var raw = "";

    var requestOptions = {
      method: "PUT",
      body: raw,
      redirect: "follow",
    };

    fetch(
      `https://dbms-api-woad.vercel.app/vacantrooms/${roomno}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));

    setName("");
    setAdmissionNo("");
    setBranch("");
    setYear("");
    setDoa("");
    setCategory("");
    setRoomNo("");
  };

  return (
    <div>
      <div className="pb-10 mx-10">
        <div className="flex rounded-3xl bg-[#9600CB]">
          <div className=" flex-1 flex justify-center pt-10 ">
            <div className="">
              <div className="flex gap-8 mb-10 ">
                <div className="text-lg text-white">Name</div>
                <input
                  className="text-white px-2 py-1 flex-auto bg-[#9600CB] border-2 rounded-lg"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </div>
              <div className="flex gap-8 mb-10 ">
                <div className="text-lg text-white">Admssion No</div>
                <input
                  className="text-white px-2 py-1 flex-auto bg-[#9600CB] border-2 rounded-lg"
                  value={admissionNo}
                  onChange={(e) => setAdmissionNo(e.target.value)}
                ></input>
              </div>
              <div className="flex gap-8 mb-10">
                <div className="text-lg text-white">Branch</div>
                <input
                  className="text-white px-2 py-1 flex-auto bg-[#9600CB] border-2 rounded-lg"
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                ></input>
              </div>
              <div className="flex gap-8 mb-10">
                <div className="text-lg text-white">Year</div>
                <input
                  className="text-white px-2 py-1 flex-auto bg-[#9600CB] border-2 rounded-lg"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                ></input>
              </div>
              <div className="flex gap-8 mb-10 ">
                <div className="text-lg text-white">Date of Admission</div>
                <input
                  className="text-white px-2 py-1 flex-auto bg-[#9600CB] border-2 rounded-lg"
                  value={doa}
                  onChange={(e) => setDoa(e.target.value)}
                ></input>
              </div>
              <div className="flex gap-8 mb-10 ">
                <div className="text-lg text-white">Category</div>
                <input
                  className=" text-white px-2 py-1 flex-auto bg-[#9600CB] border-2 rounded-lg"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                ></input>
              </div>
              <div className="flex gap-8 mb-10 ">
                <div className="text-lg text-white">Room No</div>
                <input
                  className=" text-white px-2 py-1 flex-auto bg-[#9600CB] border-2 rounded-lg"
                  value={roomno}
                  onChange={(e) => setRoomNo(e.target.value)}
                ></input>
              </div>
              <div className="flex justify-center pb-10">
                <div
                  className="bg-white font-bold px-4 text-lg rounded-md hover:cursor-pointer hover:bg-black hover:text-white duration-300 transition"
                  onClick={handleSubmit}
                >
                  Submit
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center flex-1">
            <div className="h-96 w-96">
              <img src={table1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
