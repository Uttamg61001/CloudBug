import { Autocomplete, TextField } from '@mui/material'
import React from 'react'

let data = [
    {
        name: 'IHL',
        numofbugs: 60
    },
    {
        name: 'Striv',
        numofbugs: 60
    },
    {
        name: 'TA',
        numofbugs: 60
    },
    {
        name: 'Skej',
        numofbugs: 60
    },
    {
        name: 'MCOA',
        numofbugs: 60
    },
    {
        name: 'COC',
        numofbugs: 60
    },
    {
        name: 'Lumina',
        numofbugs: 60
    },]

const ServiceBarGraph = () => {



    return (
        <div className="bg-white py-4 px-2 rounded-lg shadow-lg max-w-4xl mx-auto">
            <div className="flex justify-between mb-4">
                <div>
                    <h1 className="text-sm font-bold text-card-foreground">Sukrut's Heroku</h1>
                    <p className="text-xs">Here's the last 7 days report.</p>
                </div>
                <div className='flex justify-center items-center' >
                    <Autocomplete
                        id="clouds"
                        options={['Heroku' , ]}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Cloud acc"
                                InputProps={{
                                    ...params.InputProps,
                                    type: 'search',
                                }}
                                sx={{padding:0}}
                            />
                        )}
                        size='small'
                        sx={{width:150 , padding: '0px', margin: '0px',borderRadius:50 ,
                            '& .MuiInputBase-root .MuiOutlinedInput-root' : {
                                
                            },
                            '& .MuiInputBase-sizeSmall' : {
                                
                            }

                         }}
                    />
                </div>
            </div>
            <div className="grid grid-cols-7 w-full place-items-center">

                {
                    data?.map((service, i) => {
                        return (
                            <div className="flex flex-col items-center" key={i}>
                                <div className="relative w-2 h-32 bg-slate-300 rounded-full overflow-hidden">
                                    <div className="absolute bottom-0 w-full h-1/2 bg-[#51459E]"></div>
                                </div>
                                <span className="text-[8px] mt-2 -rotate-[60deg]">{service.name}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ServiceBarGraph