import React, { useState } from "react";
import { useEffect } from "react";
import table2 from "../assets/table2pic.png";

export default function TableSix() {
  const [name, setName] = useState("");
  const [admissionNo, setAdmissionNo] = useState("");
  const [admissionNoIn, setAdmissionNoIn] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");
  const [doa, setDoa] = useState("");
  const [category, setCategory] = useState("");
  const [roomno, setRoomNo] = useState("");
  const [data, setData] = useState();
  const [show, setShow] = useState(0);

  useEffect(() => {
    if (data) {
      if (data.length == 0) console.log("ad");
      setAdmissionNo(data[0].admn_no);
      setName(data[0].name);
      setBranch(data[0].branch);
      setYear(data[0].year);
      let k = String(data[0].date_of_admn);
      let date = "";
      for (let i = 0; i < k.length; i++) {
        if (k[i] != "T") date += k[i];
        else break;
      }
      setDoa(date);
      setCategory(data[0].category);
      setRoomNo(data[0].room_no);
      setShow(1);
      console.log(name, doa, branch, year, category, roomno);
    }
  }, [data]);
  const handleSubmit = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    await fetch(
      `https://dbms-api-woad.vercel.app/inmates/${admissionNoIn}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) =>
        result.length !== 2
          ? setData(eval(result), console.log(result.length))
          : setShow(2)
      )
      .catch((error) => console.log("error", error));
  };

  return (
    <div>
      <div className="pb-10 mx-10">
        <div className="rounded-3xl bg-[#9600CB]">
          <div className="flex flex-col">
            <div className="w-full flex justify-center pt-10">
              <div className="text-white text-2xl">
                Get Details of a Student
              </div>
            </div>
            <div className="mt-10 flex gap-8 mb-10 ml-10 w-6/12 ">
              <div className="text-xl text-white">
                Enter the Admission_No :{" "}
              </div>
              <input
                className=" text-white px-2 py-1 flex-auto bg-[#9600CB] border-2 rounded-lg"
                value={admissionNoIn}
                onChange={(e) => setAdmissionNoIn(e.target.value)}
              ></input>
            </div>
            {show === 2 ? (
              <div className="text-white -mt-8 text-lg -ml-[910px] pb-4">
                *No such student found
              </div>
            ) : (
              <></>
            )}
            <div className="flex justify-center pb-10">
              <div
                className="bg-white font-bold px-4 text-lg rounded-md hover:cursor-pointer hover:bg-black hover:text-white duration-300 transition"
                onClick={handleSubmit}
              >
                Submit
              </div>
            </div>
          </div>
          {show === 1 ? (
            <div className="flex">
              <div className="ml-28">
                <div className="flex w-[800px] gap-8 mb-10 ">
                  <div className="text-lg text-white">Name</div>
                  <div className="text-left text-white px-2 py-1 flex-auto bg-[#9600CB] border-2 rounded-lg">
                    {name}
                  </div>
                </div>
                <div className="flex gap-8 mb-10 ">
                  <div className="text-lg text-white">Admssion No</div>
                  <div className="text-left text-white px-2 py-1 flex-auto bg-[#9600CB] border-2 rounded-lg">
                    {admissionNo}
                  </div>
                </div>
                <div className="flex gap-8 mb-10">
                  <div className="text-lg text-white">Branch</div>
                  <div className="text-left text-white px-2 py-1 flex-auto bg-[#9600CB] border-2 rounded-lg">
                    {branch}
                  </div>
                </div>
                <div className="flex gap-8 mb-10">
                  <div className="text-lg text-white">Year</div>
                  <div className="text-left text-white px-2 py-1 flex-auto bg-[#9600CB] border-2 rounded-lg">
                    {year}
                  </div>
                </div>
                <div className="flex gap-8 mb-10 ">
                  <div className="text-lg text-white">Date of Admission</div>
                  <div className="text-left text-white px-2 py-1 flex-auto bg-[#9600CB] border-2 rounded-lg">
                    {doa}
                  </div>
                </div>
                <div className="flex gap-8 mb-10 ">
                  <div className="text-lg text-white">Category</div>
                  <div className="text-left text-white px-2 py-1 flex-auto bg-[#9600CB] border-2 rounded-lg">
                    {category}
                  </div>
                </div>
                <div className="flex gap-8 mb-10 ">
                  <div className="text-lg text-white">Room No</div>
                  <div className="text-left text-white px-2 py-1 flex-auto bg-[#9600CB] border-2 rounded-lg">
                    {roomno}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}

          <div className="flex justify-center items-center flex-1"></div>
        </div>
      </div>
    </div>
  );
}
