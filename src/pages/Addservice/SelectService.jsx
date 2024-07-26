import React, { useState } from "react";
import images from "../../assets/images/imagesExport";
import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Step,
  StepLabel,
  Stepper,
  TextField,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import SelectCloudHeader from "../Addcloud/SelectCloudHeader";
import Sidebar from "../../components/Sidebar";
import useWindowWidth from "../../hooks/useWIndowWidth";

const ApiKeys = ["IHL", "Skej", "Lumina"];
const SelectService = () => {
  const width = useWindowWidth();
  const [activeStep, setActiveStep] = useState();
  const [apiKey, setApiKey] = useState(null);
  const { cloud } = useParams();
  const navigate = useNavigate();
  const handleSelectApiKey = (event) => {
    setApiKey(event.target.value);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <div className="hidden sm:block">
      <Sidebar />

      </div>
      <div className={` h-screen w-full  ${width > 768 ? "logoBg" : ""} relative`}>
      <div className=" h-full w-full absolute top-[-90px] left-0 z-[-1]  block md:hidden">
          <img
            src={images.mobileBg}
            className="h-full w-full object-cover object-left-top "
            alt="Background Image"
          />
        </div>
        {/* <SelectCloudHeader /> */}
        <main className=" flex items-center justify-center h-full w-full">
          <div className="flex flex-col items-center gap-20 h-screen justify-center w-full ">
            <h1 className="text-4xl font-[400] text-zinc-900 ">
              Select Service
            </h1>
            <div className="shadow-lg bg-white rounded-xl px-8 md:px-20 py-10  w-11/12 sm:w-3/4 md:w-3/4 lg:w-1/2 flex flex-col justify-between gap-10">
              <div className="mt-4 mb-10 md:px-8">
                <Stepper activeStep={1}>
                  {[1, 2, 3].map((label, index) => {
                    return (
                      <Step
                        key={label}
                        sx={{
                          "&.Mui-active .MuiStepLabel-label": { color: "#fff" },
                          //   '&.Mui-active .MuiStepLabel-label': { color: '#fff' },
                          "&.Mui-completed .MuiStepLabel-label": {
                            color: "#fff",
                          },
                          "& .MuiStepConnector-root.Mui-active, & .MuiStepConnector-root.Mui-completed":
                            {
                              "& .MuiStepConnector-line": {
                                borderColor: "#33186B",
                              },
                            },
                          "& .MuiStepIcon-root.Mui-active, & .MuiStepIcon-root.Mui-completed":
                            {
                              color: "#33186B",
                            },
                        }}
                      >
                        <StepLabel></StepLabel>
                      </Step>
                    );
                  })}
                </Stepper>
              </div>
              <div className="my-4 ">
                <Autocomplete
                  id="size-small-filled"
                  size="small"
                  options={ApiKeys}
                  sx={{ width: "100%" }}
                  value={""}
                  defaultValue={""}
                  selectOnFocus
                  onChange={(_, value) => {}}
                  getOptionLabel={(option) => option}
                  renderInput={(params, id) => (
                    <TextField {...params} label="Select Api Key" />
                  )}
                  renderOption={(props, option) => (
                    <li
                      {...props}
                      style={{ cursor: "pointer" }}
                      key={option}
                      className="py-1 ps-3 menu-drop-item"
                    >
                      {" "}
                      {option}{" "}
                    </li>
                  )}
                />
                <div className="mb-4 mt-4 flex justify-end items-center">
                  {/* <Button variant="outlined" sx={{
                                color: "#33186B", borderColor: '#33186B', outlineColor: "#33186B",
                                '&:hover': {
                                    backgroundColor: '#33186B',
                                    color: 'white',
                                    boxShadow: 'none',
                                    outline: 'none',
                                    borderColor: '#33186B'
                                },

                            }}>
                                Clear
                            </Button> */}
                  <Button
                    variant="contained"
                    sx={{
                        color: "#51459E",
                        backgroundColor: "#EAE6FF",
                        fontWeight: "bold",
                        letterSpacing: "2px",
                        boxShadow: "2",
                      "&:hover": {
                        backgroundColor: "#33186B",
                        color: "white",
                        boxShadow: "none",
                        outline: "none",
                        borderColor: "#33186B",
                      },
                    }}
                    onClick={() => {
                      navigate("/select-ticket-tool");
                    }}
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
        <div className="hidden md:inline-block absolute top-48 left-20 z-10">
          <img src={images[cloud]} alt="" />
        </div>
      </div>
    </Box>
  );
};

export default SelectService;
