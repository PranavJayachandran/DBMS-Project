import React from "react";
import table2 from "../assets/table2pic.png";

export default function TableTwo() {
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
                        <div className="text-lg text-white">
                            Name
                        </div>
                        <input className="text-white px-2 py-1 flex-auto bg-[#9600CB] border-2 rounded-lg">
                        </input>
                    </div>
                    <div className="flex gap-8 mb-10 ">
                        <div className="text-lg text-white">
                           Admssion No
                        </div>
                        <input className="text-white px-2 py-1 flex-auto bg-[#9600CB] border-2 rounded-lg">
                        </input>
                    </div>
                    <div className="flex gap-8 mb-10">
                        <div className="text-lg text-white">
                            Month
                        </div>
                        <input className="text-white px-2 py-1 flex-auto bg-[#9600CB] border-2 rounded-lg">
                        </input>
                    </div>
                    <div className="flex justify-center ">
                    <div className="bg-white font-bold px-4 text-lg rounded-md">
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
                <div className="text-white text-left mb-4 text-lg">
                    Attendace
                </div>
                <div className="text-white text-left mb-4 text-lg">
                    Room Rent
                </div>
                <div className="text-white text-left mb-4 text-lg">
                    Mess Bill
                </div>
                <div className="text-white text-left mb-4 text-lg">
                    Extra
                </div>
                <div className="text-white text-left mb-4 text-lg">
                    Total amount to be payable
                </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
