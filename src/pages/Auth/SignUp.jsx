import React, { useState } from "react";
import { TextField, InputAdornment, IconButton, Alert } from "@mui/material";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import axios from "axios";
import images from "../../assets/images/imagesExport";
import { apis } from "../../api";

const logImg = [
  { img: images.logWithG },
  { img: images.logWithGit },
  { img: images.logWithMicro },
];

const SignUp = () => {
  const [signUpData, setSignUpData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpData({
      ...signUpData,
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
    if (!signUpData.email) tempErrors.email = "Email is required";
    if (!signUpData.password) tempErrors.password = "Password is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post(`${apis.Register_Api}`, {
          email: signUpData.email,
          password: signUpData.password,
        });
      } catch (error) {
        console.error("Sign Up error:", error);
        setErrorMessage("Sign Up failed. Please try again.");
      }
    }
  };

  return (
    <div className=" w-full ">
      <div className="h-[100vh] w-full absolute top-0 left-0 z-[-1] hidden md:block ">
        <img
          src="../src//assets//images//loginImg.png"
          className="h-full w-full object-fill object-center "
          alt="Background Image"
        />
      </div>
      <div className=" h-full w-full absolute top-[-70px] left-0 z-[-1]  block md:hidden">
        <img
          src={images.mobileBg}
          className="h-full w-full object-cover object-left-top"
          alt="Background Image"
        />
      </div>

      <section className="max-w-[400px]  m-auto px-5  mt-20 sm:mt-0 sm:px-10 ">
        <div className="hidden sm:grid justify-center mt-10">
          <img src={images.logo} alt="Logo" className="w-44 " />
        </div>
        <div className="flex sm:hidden  w-28">
          <img src={images.imageuploadfloat} alt="Logo" className="h-full w-full" />
        </div>
        <form autoComplete="off" onSubmit={handleSubmit} className="flex flex-col gap-4" >
          <h1 className="text-2xl  font-semibold mt-5 sm:mt-10">Sign Up</h1>
          <p className="text-[#969696]  text-md ">
            Please sign up to create your account.
          </p>
          

          
          <TextField
            name="email"
            label="Email"
            variant="outlined"
            fullWidth
            style={{  height: "40px" }}
            InputLabelProps={{
              style: { top: -5, fontSize:"0.875rem"}, // Adjust label alignment
            }}
            InputProps={{
              classes: {
                focused: "focus:border-green-500",
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                height: "40px",
                borderRadius:"10px",
                "&:hover fieldset": {
                  borderColor: "#7360DF",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#7360DF",
                },
              },
            }}
            value={signUpData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            autoComplete="off"
          />

          <TextField
            name="password"
            label="Password"
            variant="outlined"

            style={{  height: "40px" }}
            fullWidth
            type={showPassword ? "text" : "password"}
            InputLabelProps={{
              style: { top: -5, fontSize:"0.875rem"}, // Adjust label alignment
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
                borderRadius:"10px",
                "&:hover fieldset": {
                  borderColor: "#7360DF",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#7360DF",
                },
              },
            }}
            value={signUpData.password}
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
            Sign up
          </button>

          <p className="text-center">Sign up with</p>

          <div className="grid grid-cols-3 gap-2 ">
            {logImg.map((res, index) => (
              <div
                key={index}
                className="border  flex items-center justify-center border-[#BCBEC0]  py-2 rounded "
              >
                <img src={res.img} alt={`login option ${index}`} className="h-[30px] w-[30px]"  />
              </div>
            ))}
          </div>
        </form>
      </section>
    </div>
  );
};

export default SignUp;