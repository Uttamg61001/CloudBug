import React from 'react'
import images from '../../assets/images/imagesExport'
import SelectCloudHeader from './SelectCloudHeader'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../../components/Sidebar'
import { Box } from '@mui/material'
import useWindowWidth from '../../hooks/useWIndowWidth'
const cloud = [
  {
    name: "aws",
    image: images.aws
  },
  {
    name: "heroku",
    image: images.heroku
  },
  {
    name: "gcloud",
    image: images.gcloud
  },
  {
    name: "azure",
    image: images.azure
  }
]
console.log(cloud)
const SelectCloud = () => {
  const width = useWindowWidth();
  const navigate = useNavigate()
  const handleClick = (selectedItem) => {
    console.log(selectedItem);
    navigate(`/cloud-credentials/${selectedItem?.name}`,)
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
        <main className=" flex items-center justify-evenly h-full w-">
          <div className="flex flex-col items-center gap-20 h-screen justify-center ">
            <h1 className="text-2xl font-medium sm:text-4xl text-zinc-900 ">Select Your Cloud</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-4 md:p-0">
              {cloud.map((item, index) => (
                
                <div key={item.name} className="flex items-center p-4 justify-center  bg-[#EEF7FE]  rounded-[20px] shadow-md"
                  onClick={() => handleClick(item)}
                >
                  <img src={item.image} alt="AWS Logo" className="object-contain cursor-pointer" />
                </div>
              ))}
            </div>
          </div>
        </main>
        <div className=" md:inline-block absolute top-20 left-8 sm:left-40 z-+++++++++10 w-24 sm:w-48">
          <img src={images.imageuploadfloat} alt="" />
        </div>
      </div>
    </Box>
  )
}

export default SelectCloud