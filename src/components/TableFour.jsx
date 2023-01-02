import React from "react";
import { useState } from "react";
import table2 from "../assets/table2pic.png";

export default function TableFour() {

    const [admno,setAdmNo]=useState("");
    const [roomno,setRoomNo]=useState("");
    const [complaint,setComplaint]=useState("");

    const handlesubmission=()=>{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
          "admission_no": admno,
          "room_no": roomno,
          "complaint": complaint
        });
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch("https://dbms-api-woad.vercel.app/complaints", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));


        setAdmNo("");
        setRoomNo("");
        setComplaint("");
    }

  return (
    <div>
      <div className="mx-10">
        <div className="flex  rounded-3xl bg-[#9600CB] ">
            <div className="pb-4 w-7/12 pl-36 pr-16 flex justify-center pt-10 ">
                <div className="w-full">
                    <div className="flex gap-8 mb-10 ">
                        <div className="text-lg text-white">
                           Admssion No
                        </div>
                        <input className="text-white px-2 py-1 flex-auto bg-[#9600CB] border-2 rounded-lg" value={admno} onChange={(e)=>setAdmNo(e.target.value)}>
                        </input>
                    </div>
                    <div className="flex gap-8 mb-10">
                        <div className="text-lg text-white">
                            Room no
                        </div>
                        <input className="text-white px-2 py-1 flex-auto bg-[#9600CB] border-2 rounded-lg"  value={roomno} onChange={(e)=>setRoomNo(e.target.value)}>
                        </input>
                    </div>
                    <div className="flex gap-8 mb-10 ">
                        <div className="text-lg text-white">
                            Complaints
                        </div>
                        <textarea className="text-white px-2 py-1 h-20 flex-auto bg-[#9600CB] border-2 rounded-lg" value={complaint} onChange={(e)=>setComplaint(e.target.value)}>
                        </textarea>
                    </div>
                    <div className="flex justify-center ">
                    <div className="bg-white font-bold px-4 text-lg rounded-md hover:bg-black hover:text-white hover:cursor-pointer" onClick={handlesubmission}>
                        Submit
                    </div>
                    </div>

                </div>
            </div>
            <div className="w-5/12 flex  flex-1 ">
                <div className="-ml-40  h-[500px] w-[500px]">
                    <img src={table2}/>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
