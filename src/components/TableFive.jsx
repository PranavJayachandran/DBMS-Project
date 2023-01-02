import React,{useState} from "react";
import table2 from "../assets/table2pic.png";

export default function TableFive() {
    const [month,setMonth]=useState(0);
    const [items,setItems]=useState([]);

    const handlesubmission=()=>{
        fetch(`https://dbms-api-woad.vercel.app/stock/${month}`)
        .then((res) => res.json())
        .then((data) => {
           console.log(data);
           setItems(data);
        })
        .catch((err) => {
           console.log(err.message);
        });
    }

  return (
    <div>
      <div className="mx-10">
        <div className="flex rounded-3xl bg-[#9600CB]">
            <div className=" pb-4 w-6/12 pl-36 pr-16 flex justify-center pt-10">
                <div className="w-full">
                    <div className="text-white text-3xl text-left font-semibold pb-10">
                       Display Stock Details
                    </div>
                    <div className="flex gap-4 mb-10">
                        <div className="text-lg text-white">
                            Month (in number)
                        </div>
                        <input className="text-white px-2 py-1 flex-auto bg-[#9600CB] border-2 rounded-lg" onChange={(e)=>setMonth(e.target.value)}>
                        </input>
                    </div>
                    <div className="flex justify-center ">
                    <div className="bg-white font-bold px-4 text-lg rounded-md hover:bg-black hover:text-white hover:cursor-pointer" onClick={handlesubmission}>
                        Submit
                    </div>
                    </div>
                </div>
            </div>
            <div className="w-6/12 flex  flex-1">
                <div className="border-l-2 px-20 my-10">
                <div className="text-white text-3xl text-left font-semibold pb-10">
                   Stock Details
                </div>
                <div>
                    <div className="flex  text-lg   border-b-2 ">
                       <div className="w-6/12 text-white border-r-2 pb-1 "> Name</div>
                       <div className="pl-4 text-white">Quantity</div>
                    </div>
                {items.map((item)=>(
                 <div className="text-md flex text-white text-left mb-4 text-lg">
                   <div className="w-6/12 pt-4 border-r-2 pb-1 text-center">
                    {item.item}
                    </div>
                    <div className="pt-4 w-6/12 text-center">
                        {item.quantity}
                        </div>
                </div>
                ))}
                </div>
                
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
