import React, { useState } from "react";
import { TextField, InputAdornment, IconButton, Alert } from "@mui/material";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import axios from "axios";
import images from "../../assets/images/imagesExport";

const logImg = [
  { img: images.logWithG },
  { img: images.logWithGit },
  { img: images.logWithMicro },
];

const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validate = () => {
    let tempErrors = {};
    if (!loginData.email) tempErrors.email = "Email is required";
    if (!loginData.password) tempErrors.password = "Password is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post("https://neura-bug.fly.dev/login", {
          email: loginData.email,
          password: loginData.password,
        });
        console.log("Login successful:", response.data);
        // Handle successful login
      } catch (error) {
        console.error("Login error:", error);
        setErrorMessage("Login failed. Please check your credentials.");
      }
    }
  };

  return (
    <div className=" w-full h-screen grid grid-cols-1 md:grid-cols-2 gap-4 relative">
      <div className=" h-full w-full absolute top-[-70px] left-0 z-[-1]  block md:hidden ">
        <img
          src={images.mobileBg}
          className="h-full w-full object-cover object-left-top"
          alt="Background Image"
        />
      </div>
      <section className=" bg-[#EEF7FE] shadow-[2px_0px_6px_0px_rgba(0,0,0,0.15)]  rounded-r-[45px] rounded-b-[45px] p-8  hidden md:grid gap-4 place-content-center place-items-center ">
        <p className="text-[#33186B] text-l text-center font-semibold ">
          Monitor and get notified when something goes off in your products with{" "}
          <span className="font-bold text-xl">NeuraBug!</span>
        </p>
        <div className="">
          <img
            src={images.logoBg}
            alt="NeuraBug Logo"
            className=" sm:w-[30vh] md:w-[70vh]   mx-auto  mt-10"
          />
        </div>
      </section>
      <section className="max-w-[400px] m-3 sm:m-auto px-5  mt-20 sm:mt-0 sm:px-10">
        <div className="hidden sm:grid justify-center  md:mt-6 lg:mt-10">
          <img src={images.logo} alt="Logo" className="w-44 " />
        </div>
        <div className="flex sm:hidden  w-28 ">
          <img src={images.imageuploadfloat} alt="Logo" className="h-full w-full" />
        </div>
        <form autoComplete="off" onSubmit={handleSubmit} className="w-full flex flex-col gap-4 ">
          <h1 className=" text-2xl  font-semibold mt-5 md:mt-4 lg:mt-10">Login</h1>
          <p className="text-[#969696]  text-md">
            Please login to continue to your account.
          </p>

          <TextField
            name="email"
            label="Email"
            variant="outlined"
            fullWidth
            style={{ height: "40px" }}
            InputLabelProps={{
              style: { top: -5, fontSize: "0.875rem" }, // Adjust label alignment
            }}
            InputProps={{
              classes: {
                focused: "focus:border-green-500",
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                height: "40px",
                borderRadius: "10px",
                "&:hover fieldset": {
                  borderColor: "#7360DF",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#7360DF",
                },
              },
            }}
            value={loginData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            autoComplete="off"
          />

          <TextField
            name="password"
            label="Password"
            variant="outlined"
            style={{ height: "40px" }}
            fullWidth
            type={showPassword ? "text" : "password"}
            InputLabelProps={{
              style: { top: -5, fontSize: "0.875rem" }, // Adjust label alignment
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleTogglePasswordVisibility}
                    edge="end"
                  >
                    {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                height: "40px",
                borderRadius: "10px",
                "&:hover fieldset": {
                  borderColor: "#7360DF",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#7360DF",
                },
              },
            }}
            value={loginData.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
            autoComplete="new-password"
          />

          <div className=" flex items-center">
            <input
              type="checkbox"
              className="w-4 h-6 accent-[#000000] cursor-pointer"
            />
            <span className="ml-2 text-xs sm:text-md">Keep me logged in</span>
          </div>

          {errorMessage && <Alert severity="error">{errorMessage}</Alert>}

          <button className="bg-[#33186B] w-full text-white py-3 rounded-[10px]">
            Login
          </button>

          <p className="text-center text-[3vw] md:text-[14px]">
            Login with
          </p>

          <div className="grid grid-cols-3 gap-2">
            {logImg.map((res, index) => (
              <div
                key={index}
                className="border  flex items-center justify-center border-[#BCBEC0]  py-2 rounded "
              >
                <img
                  src={res.img}
                  alt={`login option ${index}`}
                  className="h-[30px] w-[30px]"
                />
              </div>
            ))}
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;