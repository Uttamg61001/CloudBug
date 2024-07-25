import React from 'react'
import SelectCloudHeader from '../Addcloud/SelectCloudHeader'
import { Autocomplete, Box, Button, TextField } from '@mui/material'
import images from '../../assets/images/imagesExport'
import Sidebar from '../../components/Sidebar'
import useWindowWidth from '../../hooks/useWIndowWidth'

const ApiKeys = [
    'heroku',
    'aws',
    'gcloud',
    'azure',
]

const TicketToolCreds = () => {
    const width = useWindowWidth();


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
                <div className="flex flex-col items-center gap-20 h-screen justify-center w-full ">
                    <h1 className="text-2xl font-medium sm:text-4xl text-zinc-900 mt-20 sm:mt-0 ">Ticket Tool Credentials</h1>
                    <div className="shadow-lg bg-white rounded-xl p-4 pt-8 w-11/12 sm:w-3/4 md:w-2/5 lg:w-1/2">
                        {/* <div className='my-4' >
                    <Autocomplete
                        id="size-small-filled"
                        size="small"
                        options={ApiKeys}
                        sx={{ width: '100%' }}
                        value={''}
                        defaultValue={''}
                        selectOnFocus
                        onChange={(_, value) => { }}
                        getOptionLabel={(option) => option}
                        renderInput={(params, id) => <TextField {...params} label="Select Api Key" />}
                        renderOption={(props, option) => <li {...props} style={{ cursor: 'pointer' }} key={option} className="py-1 ps-3 menu-drop-item"> {option} </li>}
                    />
                </div> */}
                        {/* <div className="text-center font-semibold text-zinc-500 ">OR</div> */}
                        <div className='my-8' >
                            <input type="text" placeholder="API Key" className="w-full p-2 border border-zinc-300  rounded-lg bg-white  text-zinc-900 " />
                        </div>
                        <div className='my-8' >
                            <input type="text" placeholder="API Secret" className="w-full p-2 border border-zinc-300  rounded-lg bg-white  text-zinc-900 " />
                        </div>
                        <div className='mb-8 mt-8 flex justify-between items-center' >
                            <Button variant="outlined" sx={{
                                color: "#33186B", borderColor: '#33186B', outlineColor: "#33186B",
                                '&:hover': {
                                    backgroundColor: '#33186B',
                                    color: 'white',
                                    boxShadow: 'none',
                                    outline: 'none',
                                    borderColor: '#33186B'
                                },
                            }}>
                                Test
                            </Button>
                            <Button variant="contained" sx={{
                                color: "#33186B", backgroundColor: '#EAE6FF', borderColor: '#33186B', fontWeight: 600,
                                '&:hover': {
                                    backgroundColor: '#33186B',
                                    color: 'white',
                                    boxShadow: 'none',
                                    outline: 'none',
                                    borderColor: '#33186B'
                                },
                            }}
                                onClick={() => {
                                    navigate("/select-service")
                                }}
                            >
                                Submit
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
            2
        </div>
        </Box>
    )
}

export default TicketToolCreds