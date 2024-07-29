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

const ApiKeys = ["heroku", "aws", "gcloud", "azure"];
const CloudCreds = () => {
  const width = useWindowWidth();
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState();
  const [apiKey, setApiKey] = useState(null);
  const { cloud } = useParams();
  const handleSelectApiKey = (event) => {
    setApiKey(event.target.value);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <div className="hidden sm:block">
        <Sidebar />
      </div>

      <div
        className={` h-[100vh] w-full  ${width > 768 ? "logoBg" : ""} relative`}
      >
        <div className=" h-full w-full absolute top-[-70px] left-0 z-[-1]  block md:hidden">
          <img
            src={images.mobileBg}
            className="h-full w-full object-cover object-left-top"
            alt="Background Image"
          />
          
        </div>
        {/* <SelectCloudHeader /> */}
        <main className=" flex items-center justify-evenly h-full">
          <div className="flex flex-col items-center gap-10 mt-36 justify-center w-full ">
            <h1 className="text-2xl sm:text-3xl font-medium text-zinc-900 ">
              Cloud Credentials
            </h1>
            {/* <div className="shadow-lg bg-white rounded-xl p-4  w-11/12 sm:w-3/4 md:w-2/5 lg:w-1/2"> */}
            <div className="shadow-sm sm:shadow-md bg-white rounded-xl px-4 lg:px-8 w-[90%] md:w-[35%] lg:w-[45%] ">
              <div className="mt-4 mb-10 px-8">
                <Stepper activeStep={0}>
                  {[1, 2, 3].map((label, index) => {
                    return (
                      <Step
                        key={label}
                        sx={{
                          "&.Mui-active .MuiStepLabel-label": { color: "#fff" },
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
              <div className="my-4">
                {/* <select className="w-full p-2 border border-zinc-300 text-center text-zinc-500 rounded-lg bg-white  text-zinc-900 ">
                                <option>
                                    ---
                                    Select existing API key
                                    ---
                                </option>
                                <option>
                                    Heroku
                                </option>
                            </select> */}
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
              </div>
              <div className="text-center font-semibold text-zinc-500 ">OR</div>
              <div className="my-4">
                <input
                  type="text"
                  placeholder="API Key"
                  className="w-full p-2 border border-zinc-300  rounded-lg bg-white  text-zinc-900 "
                />
              </div>
              <div className="my-4">
                <input
                  type="text"
                  placeholder="API Secret"
                  className="w-full p-2 border border-zinc-300  rounded-lg bg-white  text-zinc-900 "
                />
              </div>
              <div className="mb-4 mt-8 flex justify-between items-center">
                <Button
                  variant="outlined"
                  sx={{
                    color: "#33186B",
                    borderColor: "#33186B",
                    outlineColor: "#33186B",
                    "&:hover": {
                      backgroundColor: "#33186B",
                      color: "white",
                      boxShadow: "none",
                      outline: "none",
                      borderColor: "#33186B",
                    },
                  }}
                >
                  Test
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    color: "#51459E",
                    backgroundColor: "#EAE6FF",
                    fontWeight: "bold",
                    boxShadow: "none",
                    letterSpacing: "2px",
                    "&:hover": {
                      backgroundColor: "#33186B",
                      color: "white",
                      boxShadow: "none",
                      outline: "none",
                      borderColor: "#33186B",
                    },
                  }}
                  onClick={() => {
                    navigate("/select-service");
                  }}
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </main>
        <div className=" md:inline-block absolute top-20 w-20 left-8 sm:w-36   sm:left-36 z-10">
          <img src={images[cloud]} alt="" />
        </div>
        
      </div>
    </Box>
  );
};

export default CloudCreds;
