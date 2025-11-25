// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useUser } from "../../components/Context/UserContext";

// interface UserData {
//   id: string;
//   fullName: string;
//   email: string;
//   role: string;
//   avatar?: string;
// }

// const HomePage: React.FC = () => {
//   const { user, setUser } = useUser();

//   const [newName, setNewName] = useState("");
//   const [showEditModal, setShowEditModal] = useState(false);

//   useEffect(() => {
//     const stored = localStorage.getItem("userData");
//     if (stored) {
//       setUser(JSON.parse(stored));
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("accessToken");
//     localStorage.removeItem("userData");
//     window.location.href = "/login";
//   };

//   const handleUpdateName = async () => {
//     if (!user) return;

//     try {
//       const accessToken = localStorage.getItem("accessToken");

//       const response = await axios.patch(
//         "https://cloudlearner.duckdns.org:1124/api/v1/user/updateUser",
//         {
//           id: user.id,
//           fullName: newName,
//         },
//         {
//           headers: { Authorization: `Bearer ${accessToken}` },
//         }
//       );

//       // UPDATED USER from API
//       const updatedUser = { ...user, fullName: newName };

//       // Update Context
//       setUser(updatedUser);

//       // Update LocalStorage
//       localStorage.setItem("userData", JSON.stringify(updatedUser));

//       setShowEditModal(false);
//       alert("Name updated successfully!");

//     } catch (error) {
//       console.error(error);
//       alert("Failed to update name");
//     }
//   };

//   return (
//     <>
//       {/* ---------- EDIT NAME MODAL ---------- */}
//       {showEditModal && (
//         <div
//           className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
//           style={{ background: "rgba(0,0,0,0.5)", zIndex: 9999 }}
//         >
//           <div className="bg-white p-4 rounded shadow" style={{ width: "350px" }}>
//             <h5 className="mb-3 text-primary">Edit Name</h5>

//             <input
//               className="form-control mb-3"
//               value={newName}
//               onChange={(e) => setNewName(e.target.value)}
//               placeholder="Enter new name"
//             />

//             <div className="d-flex justify-content-end gap-2">
//               <button className="btn btn-secondary" onClick={() => setShowEditModal(false)}>
//                 Cancel
//               </button>

//               <button className="btn btn-primary" onClick={handleUpdateName}>
//                 Update
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* --------------------------------------- */}
//       {/*            NAVBAR HEADER               */}
//       {/* --------------------------------------- */}
//       <nav className="navbar navbar-expand-lg bg-white shadow-sm fixed-top py-3">
//         <div className="container d-flex align-items-center gap-3 ">

//           {user?.avatar && (
//             <img
//               src={user.avatar}
//               className="rounded-circle"
//               width="40"
//               height="40"
//               style={{
//                 objectFit: "cover",
//                 border: "2px solid #0d6efd",
//               }}
//             />
//           )}

//           <span className="fw-semibold text-primary">{user?.fullName}</span>

//           {/* ✨ EDIT BUTTON NEXT TO NAME */}
//           <button
//             className="btn btn-sm btn-outline-primary ms-2"
//             onClick={() => {
//               setNewName(user?.fullName || "");
//               setShowEditModal(true);
//             }}
//           >
//             Edit
//           </button>

//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navMenu"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           <div className="collapse navbar-collapse" id="navMenu">
//             <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-semibold">
//               <li className="nav-item">
//                 <a className="nav-link" href="#hero">Home</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#about">About</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#services">Services</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#contact">Contact</a>
//               </li>
//             </ul>

//             <div className="d-flex align-items-center gap-3 ms-lg-4">
//               <button className="btn btn-outline-primary btn-sm px-3">Profile</button>

//               <button
//                 className="btn btn-danger btn-sm px-3"
//                 onClick={handleLogout}
//               >
//                 Logout
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* --------------------------------------- */}
//       {/*               HERO SECTION              */}
//       {/* --------------------------------------- */}
//       <section
//         id="hero"
//         className="d-flex align-items-center"
//         style={{
//           minHeight: "100vh",
//           paddingTop: "80px",
//           background: "linear-gradient(to right, #eef2ff, #ffffff)",
//         }}
//       >
//         <div className="container text-center">
//           <h1 className="fw-bold display-4 mb-3 text-primary">
//             Welcome, {user?.fullName} 👋
//           </h1>

//           <p className="lead text-muted mb-4">
//             Craftivo — Empower your digital journey. Logged in as{" "}
//             <strong>{user?.role}</strong>.
//           </p>

//           <div className="p-4 shadow rounded-4 bg-white d-inline-block">
//             <p className="mb-1">
//               <strong>Email:</strong> {user?.email}
//             </p>
//             <p className="mb-0">
//               <strong>Role:</strong> {user?.role}
//             </p>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default HomePage;










import React, { useEffect, useState } from "react";

interface UserData {
  fullName: string;
  email: string;
  role: string;
  avatar?: string;
}

const HomePage: React.FC = () => {
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("userData");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userData");
    window.location.href = "/login";
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white shadow-sm fixed-top py-3">
        <div className="container d-flex align-items-center gap-3 ">
        


          {user?.avatar && (
                <img
                  src={user.avatar}
                  className="rounded-circle"
                  width="40"
                  height="40"
                  style={{
                    objectFit: "cover",
                    border: "2px solid #0d6efd",
                  }}
                />
              )}

              <span className="fw-semibold text-primary">{user?.fullName}</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-semibold">
              <li className="nav-item">
                <a className="nav-link" href="#hero">Home</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#services">Services</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>

            {/* USER PANEL */}
            <div className="d-flex align-items-center gap-3 ms-lg-4">

              <button className="btn btn-outline-primary btn-sm px-3">
                Profile
              </button>

              <button
                className="btn btn-danger btn-sm px-3"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ----------------------------- */}
      {/*          HERO SECTION          */}
      {/* ----------------------------- */}
      <section
        id="hero"
        className="d-flex align-items-center"
        style={{
          minHeight: "100vh",
          paddingTop: "80px",
          background: "linear-gradient(to right, #eef2ff, #ffffff)",
        }}
      >
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h1 className="fw-bold display-4 mb-3 text-primary">
                Welcome, {user?.fullName} 👋
              </h1>

              <p className="lead text-muted mb-4">
                Craftivo — Empower your digital journey.  
                Logged in as <strong>{user?.role}</strong>.
              </p>

              <div className="p-4 shadow rounded-4 bg-white d-inline-block">
                <p className="mb-1">
                  <strong>Email:</strong> {user?.email}
                </p>
                <p className="mb-0">
                  <strong>Role:</strong> {user?.role}
                </p>
              </div>

              <div className="mt-4">
                <a href="#services" className="btn btn-primary btn-lg px-4 me-2">
                  Explore Services
                </a>
                <a href="#about" className="btn btn-outline-primary btn-lg px-4">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------- */}
      {/*          ABOUT SECTION         */}
      {/* ----------------------------- */}
      <section
        id="about"
        className="py-5"
        style={{
          background: "#f8f9fa",
        }}
      >
        <div className="container py-5">
          <h2 className="text-center fw-bold mb-4 text-primary">
            About Craftivo
          </h2>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1556761175-129418cb2dfe"
                className="img-fluid rounded-4 shadow"
                alt="About"
              />
            </div>

            <div className="col-lg-6 mt-4 mt-lg-0">
              <h3 className="fw-bold mb-3">
                A Platform Designed For Creative People
              </h3>

              <p className="text-muted">
                Craftivo allows users to explore services, manage accounts, and enjoy a
                personalized experience. This platform is built using modern technologies
                with smooth UI and responsive design.
              </p>

              <ul className="list-unstyled mt-3">
                <li className="mb-2">
                  ✔ Easy-to-use interface
                </li>
                <li className="mb-2">
                  ✔ Modern technology stack
                </li>
                <li className="mb-2">
                  ✔ Secure authentication
                </li>
                <li className="mb-2">
                  ✔ User-friendly dashboard
                </li>
              </ul>

              <a href="#services" className="btn btn-primary px-4 mt-3">
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
















