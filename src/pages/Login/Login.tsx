import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import loginBg from "../../assets/images/loginBg.jpg";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        "https://cloudlearner.duckdns.org:1124/api/v1/user/login",
        {
          email,
          password,
        }
      );

      const token = response.data?.data?.accessToken;

      if (!token) {
        setError("Token not found in API response");
        return;
      }

      localStorage.setItem("accessToken", token);

      const user = response.data.data.userData;
      localStorage.setItem("userData", JSON.stringify(user));

      alert("Login Successful!");

      navigate("/dashboard"); // redirect after login

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

          {/* Navigation Buttons */}
          <div className="d-flex w-100 justify-content-around mb-4">
            {/* <button
              className="btn btn-outline-primary w-45"
              onClick={() => navigate("/login")}
            >
              Login
            </button>

            <button
              className="btn btn-outline-secondary w-45"
              onClick={() => navigate("/signup")}
            >
              Signup
            </button> */}

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
// import loginBg from "../../assets/images/loginBg.jpg";

// const Login: React.FC = () => {
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
//           email: email,
//           password: password,
//         }
//       );
//       console.log("response from response.data:", response.data);
//       console.log("response from response.data.data:", response.data.data);
//       console.log("response from api:", response);

//       // API Response (You MUST confirm field name)
//       const token = response.data?.data?.data?.accessToken;
//       console.log("token is:", token)

//       if (!token) {
//         setError("Token not found in response");
//         return;
//       }

//       // SAVE TOKEN IN LOCALSTORAGE
//       localStorage.setItem("accessToken", token);

//       alert("Login Successful!");
//       console.log("Token Saved:", token);

//       // redirect (optional)
//       // window.location.href = "/dashboard";

//     } catch (err: any) {
//       console.log(err);
//       setError("Invalid email or password");
//     }
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
//       <div
//         className="row w-50 shadow rounded-4 overflow-hidden"
        
//       >

//         {/* LEFT IMAGE */}
//         <div className="col-md-6 p-0 h-100">
//           <img
//             src={loginBg}
//             alt="login background"
//             className="img-fluid h-100 w-100"
//             style={{ objectFit: "cover" }}
//           />
//         </div>

//         {/* RIGHT FORM */}
//         <div className="col-md-6 d-flex justify-content-center align-items-center bg-white p-4">
//           <div className="w-75">

//           {/* tab content start */}

//           <ul className="nav nav-pills mb-6" id="pills-tab" role="tablist">
//             <li className="nav-item" role="presentation">
//               <a className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Login</a>
//             </li>
//             <li className="nav-item" role="presentation">
//               <a className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Signup</a>
//             </li>
//           </ul>
//           {/* tab content end */}
//             <h3 className="text-center mb-3">Login</h3>

//             {error && (
//               <div className="alert alert-danger py-2 text-center">
//                 {error}
//               </div>
//             )}

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



