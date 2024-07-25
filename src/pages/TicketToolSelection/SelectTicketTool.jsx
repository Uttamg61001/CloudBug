import React, { useState } from 'react'
import images from '../../assets/images/imagesExport'
import { Autocomplete, Box, Button, Step, StepLabel, Stepper, TextField } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import SelectCloudHeader from '../Addcloud/SelectCloudHeader'
import Sidebar from '../../components/Sidebar'
import useWindowWidth from '../../hooks/useWIndowWidth'

const ticketTools = [
    {
      name: "Clickup",
      image: images.clickup
    },
    {
      name: "Jira",
      image: images.clickup
    }
  ]
const SelectTicketTool = () => {
  const width = useWindowWidth();
    const navigate = useNavigate()
  const handleClick = (selectedItem) => {
    console.log(selectedItem);
    // navigate(`/select-ticket-tool`);
  }
    return (
      <Box sx={{ display: 'flex' }}>
        <div className='hidden sm:block'>

        <Sidebar />
        </div>
        <div className={` h-full w-full  ${width > 768 ? "logoBg" : "" } relative`}>
        <div className=" h-full w-full absolute top-[-70px] left-0 z-[-1]  block md:hidden">
        <img
          src={images.mobileBg}
          className="h-full w-full object-cover object-left-top"
          alt="Background Image"
        />
      </div>
        {/* <SelectCloudHeader /> */}
        <main className=" flex items-center justify-center h-full w-full">
          <div className="flex flex-col items-center gap-20 h-screen justify-center ">
            <h1 className="text-2xl font-medium sm:text-4xl text-zinc-900 ">Select Ticket tool</h1>
            <div className="grid grid-cols-2 gap-6 md:gap-20 p-4 md:p-0  place-items-center">
              {ticketTools.map((item, index) => (
                <div key={item.name} className="flex flex-col items-center justify-center p-2 md:p-6 bg-[#EEF7FE]  rounded-[20px] shadow-md z-20"
                  onClick={() => handleClick(item)}>
                  <img src={item.image} alt="AWS Logo" className="mb-2" />
                </div>
              ))}
            </div>
          </div>
        </main>
        {/* <div className="hidden md:inline-block absolute top-20 left-40 z-10 w-48">
          <img src={images.imageuploadfloat} alt="" />
        </div> */}
      </div>
      </Box>
    )
}

export default SelectTicketTool