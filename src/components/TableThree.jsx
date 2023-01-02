import React, { useEffect } from "react";
import { useState } from "react";
import table2 from "../assets/table2pic.png";

export default function TableThree() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
     fetch('https://dbms-api-woad.vercel.app/vacantrooms')
        .then((res) => res.json())
        .then((data) => {
           console.log(data);
           setPosts(data);
           console.log("P",posts);
        })
        .catch((err) => {
           console.log(err.message);
        });
  }, []);

  return (
    <div className="mx-10 rounded-3xl bg-[#9600CB] pl-20 pt-20 pb-20">
      <div className="text-white text-left text-2xl ">
        List of vacant rooms
      </div>
      <div className="">
      <div className="flex flex-col pt-8 text-xl text-white">
        <div className="flex gap-40 pb-4">
        <div className="pl-10">
            Room no
        </div>
        <div className="-ml-10">
            No of vacancies
        </div>
        <div>
            Floor
        </div>
        </div>
        {posts.map((item)=>(
          <div className="flex w-[700px] h-14 border">
          <div className="border-r pr-20 pl-20">
            {item.room_no}
           </div>
            <div className="pl-28 pr-28 border-x">
            {item.vacancies}
           </div>
            <div className="pl-28">
            {item.floor}
           </div>
           </div>
        ))}
      </div>
      </div>
    </div>
  );
}
