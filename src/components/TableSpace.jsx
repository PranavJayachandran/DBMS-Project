import React from 'react'
import { useState } from 'react'
import TableChoose from './TableChoose'

export default function TableSpace() {
    const [tablenumber,setTableNumber]=useState(1);
    const settoone=()=>{
        setTableNumber(1);
    }
    const settotwo=()=>{
        setTableNumber(2);
    }
    const settothree=()=>{
        setTableNumber(3);
    }
    const settofour=()=>{
        setTableNumber(4);
    }
    const settofive=()=>{
        setTableNumber(5);
    }
  return (
    <div>
    <div className='flex justify-center mt-4 mb-10'>
        <div className='flex gap-8'>
            <div className={`${tablenumber===1?"bg-[#9600CB] border-white text-white":"bg-white border-[#9600CB] textb-black"} hover:cursor-pointer hover:bg-[#9600CB] hover:border-white hover:text-white transition duration-300 text-xl font-bold py-2 px-4 rounded-md border-4 border-[#9600CB]`} onClick={settoone}>
                New Admission
            </div>
            <div className={`${tablenumber===2?"bg-[#9600CB] border-white text-white":"bg-white border-[#9600CB] textb-black"} hover:cursor-pointer hover:bg-[#9600CB] hover:border-white hover:text-white transition duration-300 text-xl font-bold py-2 px-4 rounded-md border-4 border-[#9600CB]`} onClick={settotwo}>
                Generate mess bill
            </div>
            <div className={`${tablenumber===3?"bg-[#9600CB] border-white text-white":"bg-white border-[#9600CB] textb-black"} hover:cursor-pointer hover:bg-[#9600CB] hover:border-white hover:text-white transition duration-300 text-xl font-bold py-2 px-4 rounded-md border-4 border-[#9600CB]`} onClick={settothree}>
                Display Vacancies
            </div>

            <div className={`${tablenumber===4?"bg-[#9600CB] border-white text-white":"bg-white border-[#9600CB] textb-black"} hover:cursor-pointer hover:bg-[#9600CB] hover:border-white hover:text-white transition duration-300 text-xl font-bold py-2 px-4 rounded-md border-4 border-[#9600CB]`} onClick={settofour}>
                Display stock details
            </div>
            <div className={`${tablenumber===5?"bg-[#9600CB] border-white text-white":"bg-white border-[#9600CB] textb-black"} hover:cursor-pointer hover:bg-[#9600CB] hover:border-white hover:text-white transition duration-300 text-xl font-bold py-2 px-4 rounded-md border-4 border-[#9600CB]`} onClick={settofive}>
                Request/Complaints 
            </div>
        </div>
        </div>
        <TableChoose tablenumber={tablenumber}/>
    </div>
  )
}
