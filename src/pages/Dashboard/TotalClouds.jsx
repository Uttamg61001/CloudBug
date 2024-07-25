import React from 'react'
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Badge from '@mui/material/Badge';
import images from '../../assets/images/imagesExport';


let clouds = [
    images.aws,
    images.azure,
    images.gcloud,
    images.heroku,
]

const TotalCloud = () => {
    return (
        <div className='bg-white border rounded-lg  shadow-lg p-2'>
            <div className='flex justify-between items-center '>
                <p className=" font-semibold">Total Clouds</p>
                <div className='w-[30px] h-[30px] rounded-full flex justify-center  items-center shadow-md'><MdOutlineRemoveRedEye /></div>
            </div>
            <div className='flex items-center gap-2 font-[500]'>
                <img src={images.tcloudicon} alt="" />
                <p className="text-[24px]">5</p>

            </div>
            <div className='mt-2 flex justify-start gap-5'>
                <Badge badgeContent={4} color="secondary">
                    <div className='w-[47px] h-[43px] bg-[#EEF7FE] rounded-md shadow-md flex justify-center items-center'>
                        <div className='p-2'><img src={images.aws} alt="" /></div>
                    </div>
                </Badge>

                <Badge badgeContent={4} color="secondary">
                    <div className='w-[47px] h-[43px] bg-[#EEF7FE] rounded-md shadow-md flex justify-center items-center'>
                        <div className='p-2 '><img className='w-full h-full object-contain ' src={images.heroku} alt="" /></div>
                    </div>
                </Badge>

                <Badge badgeContent={4} color="secondary">
                    <div className='w-[47px] h-[43px] bg-[#EEF7FE] rounded-md shadow-md flex justify-center items-center'>
                        <div className='p-2'><img src={images.gcloud} alt="" /></div>
                    </div>
                </Badge>

                <Badge badgeContent={4} color="secondary">
                    <div className='w-[47px] h-[43px] bg-[#EEF7FE] rounded-md shadow-md flex justify-center items-center'>
                        <div className='p-2'><img src={images.azure} alt="" /></div>
                    </div>
                </Badge>
            </div>


        </div>
    )
}

export default TotalCloud