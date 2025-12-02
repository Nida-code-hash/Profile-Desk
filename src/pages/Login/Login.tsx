import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import loginBg from "../../assets/images/loginBg.jpg";
import { useHeader } from "../../components/Context/HeaderContext"; // ✅ IMPORT CONTEXT

const Login: React.FC = () => {
  const navigate = useNavigate();

  // context function to update name in header
  const { setName } = useHeader();   // ✅ IMPORTANT

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        "https://cloudlearner.duckdns.org:1124/api/v1/user/login",
        { email, password }
      );

      // Extract token
      const token = response.data?.data?.accessToken;

      if (!token) {
        setError("Token not found in API response");
        return;
      }

      // Save token
      localStorage.setItem("accessToken", token);

      // Extract user data { fullName, role, email, etc. }
      const user = response.data.data.userData;

      // Save complete user data
      localStorage.setItem("userData", JSON.stringify(user));

      // Update header context immediately (so header updates without refresh)
      setName(user.fullName);   // ✅ KEY STEP

      alert("Login Successful!");

      navigate("/"); // Redirect
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">

      <div className="row w-50 shadow rounded-4 overflow-hidden">

        {/* Left Image */}
        <div className="col-md-6 p-0">
          <img
            src={loginBg}
            alt="login background"
            className="img-fluid h-100 w-100"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Right Form */}
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center bg-white p-4">

          <div className="d-flex w-100 justify-content-around mb-4">
            <Link to="/signup" className="nav-link">Signup</Link>
          </div>

          <div className="w-75">
            <h3 className="text-center mb-3">Login</h3>

            {error && <div className="alert alert-danger text-center">{error}</div>}

            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button className="btn btn-primary w-100 mt-2" type="submit">
                Login
              </button>
            </form>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Login;







// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import loginBg from "../../assets/images/loginBg.jpg";
// import { Link } from "react-router-dom";

// const Login: React.FC = () => {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const response = await axios.post(
//         "https://cloudlearner.duckdns.org:1124/api/v1/user/login",
//         {
//           email,
//           password,
//         }
//       );

//       const token = response.data?.data?.accessToken;

//       if (!token) {
//         setError("Token not found in API response");
//         return;
//       }

//       localStorage.setItem("accessToken", token);

//       const user = response.data.data.userData;
//       localStorage.setItem("userData", JSON.stringify(user));

//       alert("Login Successful!");

//       navigate("/"); // redirect after login

//     } catch (err) {
//       setError("Invalid email or password");
//     }
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100 bg-light">

//       <div className="row w-50 shadow rounded-4 overflow-hidden">

//         {/* Left Image */}
//         <div className="col-md-6 p-0">
//           <img
//             src={loginBg}
//             alt="login background"
//             className="img-fluid h-100 w-100"
//             style={{ objectFit: "cover" }}
//           />
//         </div>

//         {/* Right Form */}
//         <div className="col-md-6 d-flex flex-column justify-content-center align-items-center bg-white p-4">

//           {/* Navigation Buttons */}
//           <div className="d-flex w-100 justify-content-around mb-4">
//             {/* <button
//               className="btn btn-outline-primary w-45"
//               onClick={() => navigate("/login")}
//             >
//               Login
//             </button>

//             <button
//               className="btn btn-outline-secondary w-45"
//               onClick={() => navigate("/signup")}
//             >
//               Signup
//             </button> */}

//             <Link to="/signup" className="nav-link">Signup</Link>
//           </div>

//           <div className="w-75">
//             <h3 className="text-center mb-3">Login</h3>

//             {error && <div className="alert alert-danger text-center">{error}</div>}

//             <form onSubmit={handleLogin}>
//               <div className="mb-3">
//                 <label className="form-label">Email</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Enter email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//               </div>

//               <div className="mb-3">
//                 <label className="form-label">Password</label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   placeholder="Enter password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />
//               </div>

//               <button className="btn btn-primary w-100 mt-2" type="submit">
//                 Login
//               </button>
//             </form>

//           </div>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default Login;


