
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import Input from "../common/Input";
// import Button from "../common/Button";

// const RegisterForm = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     fullName: "",
//     username: "",
//     email: "",
//     phoneNumber: "",
//     password: "",
//     confirmPassword: "",
//     role: "User",
//   });
//   const [errors, setErrors] = useState({});
//   const [isLoading, setIsLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const validate = () => {
//     const newErrors = {};

//     if (!formData.fullName) {
//       newErrors.fullName = "Full name is required";
//     }
//     if (!formData.username) {
//       newErrors.username = "Enter your username";
//     }
//     if (!formData.email) {
//       newErrors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Email is invalid";
//     }
//     if (!formData.phoneNumber) {
//       newErrors.phoneNumber = "Phone number is required";
//     }
//     if (!formData.password) {
//       newErrors.password = "Password is required";
//     } else if (formData.password.length < 8) {
//       newErrors.password = "Password must be at least 8 characters";
//     }
//     if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = "Passwords do not match";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validate()) return;
//     setIsLoading(true);
//     try {
//       const response = await axios.post("https://your-api.com/auth/register", {
//         fullName: formData.fullName,
//         username: formData.username,
//         email: formData.email,
//         phoneNumber: formData.phoneNumber,
//         password: formData.password,
//         role: formData.role,
//       });
//       localStorage.setItem("authToken", response.data.token);
//       localStorage.setItem("user", JSON.stringify(response.data.user));
//       navigate("/dashboard");
//     } catch (error) {
//       setErrors({
//         form: error.response?.data?.message || "Registration failed. Please try again.",
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-2.5">
//       {errors.form && (
//         <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
//           <p>{errors.form}</p>
//         </div>
//       )}

//       <Input
//         label="Full Name"
//         type="text"
//         name="fullName"
//         placeholder="Enter your full name"
//         value={formData.fullName}
//         onChange={handleChange}
//         error={errors.fullName}
//       />

//       <Input
//         label="User Name"
//         type="text"
//         name="username"
//         placeholder="Enter your UserName"
//         value={formData.username}
//         onChange={handleChange}
//         error={errors.username}
//       />

//       <Input
//         label="Email address"
//         type="email"
//         name="email"
//         placeholder="Enter your email"
//         value={formData.email}
//         onChange={handleChange}
//         error={errors.email}
//       />

//       <Input
//         label="Phone Number"
//         type="text"
//         name="phoneNumber"
//         placeholder="Enter your phone number"
//         value={formData.phoneNumber}
//         onChange={handleChange}
//         error={errors.phoneNumber}
//       />

//       <Input
//         label="Password"
//         type="password"
//         name="password"
//         placeholder="Create a password"
//         value={formData.password}
//         onChange={handleChange}
//         error={errors.password}
//       />

//       <Input
//         label="Confirm Password"
//         type="password"
//         name="confirmPassword"
//         placeholder="Confirm your password"
//         value={formData.confirmPassword}
//         onChange={handleChange}
//         error={errors.confirmPassword}
//       />

//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2">Role</label>
//         <select
//           name="role"
//           value={formData.role}
//           onChange={handleChange}
//           className="block w-full p-2 border border-gray-300 rounded-lg"
//         >
//           <option value="User">User</option>
//           <option value="ServiceProvider">Service Provider</option>
//         </select>
//       </div>

//       <Button type="submit" fullWidth isLoading={isLoading}>
//         Create account
//       </Button>

//       <div className="text-center">
//         <p className="text-sm text-gray-600">
//           Already have an account?{" "}
//           <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
//             Sign in
//           </Link>
//         </p>
//       </div>
//     </form>
//   );
// };

// export default RegisterForm;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Input from "../common/Input";
import Button from "../common/Button";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    role: "User",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const roleColors = {
    User: "bg-blue-100", // Light blue for users
    ServiceProvider: "bg-green-100", // Light green for service providers
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!formData.username) newErrors.username = "Enter your username";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phoneNumber) newErrors.phoneNumber = "Phone number is required";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsLoading(true);
    try {
      const response = await axios.post("https://your-api.com/auth/register", {
        fullName: formData.fullName,
        username: formData.username,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        password: formData.password,
        role: formData.role,
      });
      localStorage.setItem("authToken", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      navigate("/dashboard");
    } catch (error) {
      setErrors({
        form: error.response?.data?.message || "Registration failed. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`p-6 rounded-lg shadow-lg ${roleColors[formData.role] || "bg-white"}`}>
      <form onSubmit={handleSubmit} className="space-y-2.5">
        {errors.form && (
          <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
            <p>{errors.form}</p>
          </div>
        )}

        <Input
          label="Full Name"
          type="text"
          name="fullName"
          placeholder="Enter your full name"
          value={formData.fullName}
          onChange={handleChange}
          error={errors.fullName}
        />

        <Input
          label="User Name"
          type="text"
          name="username"
          placeholder="Enter your UserName"
          value={formData.username}
          onChange={handleChange}
          error={errors.username}
        />

        <Input
          label="Email address"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />

        <Input
          label="Phone Number"
          type="text"
          name="phoneNumber"
          placeholder="Enter your phone number"
          value={formData.phoneNumber}
          onChange={handleChange}
          error={errors.phoneNumber}
        />

        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="Create a password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
        />

        <Input
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          placeholder="Confirm your password"
          value={formData.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
        />

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Role</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="block w-full p-2 border border-gray-300 rounded-lg"
          >
            <option value="User">User</option>
            <option value="ServiceProvider">Service Provider</option>
          </select>
        </div>

        <Button type="submit" fullWidth isLoading={isLoading}>
          Create account
        </Button>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
              Sign in
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
