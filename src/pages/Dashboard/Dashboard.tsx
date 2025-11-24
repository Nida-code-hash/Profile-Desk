import React, { useEffect, useState } from "react";

interface UserData {
  fullName: string;
  email: string;
  role: string;
  avatar?: string;
}

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("userData");
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userData");
    window.location.href = "/login";
  };

  return (
    <div className="container-fluid p-0">
      {/* HEADER */}
      <nav className="navbar navbar-light bg-white shadow-sm px-4 py-3 d-flex justify-content-between align-items-center">

        {/* LEFT SIDE */}
        <h4 className="m-0 fw-bold">Dashboard</h4>

        {/* RIGHT SIDE */}
        <div className="d-flex align-items-center gap-3">

          {/* Avatar */}
          {user?.avatar && (
            <img
              src={user.avatar}
              alt="profile"
              className="rounded-circle"
              width="40"
              height="40"
              style={{ objectFit: "cover", border: "2px solid #0d6efd" }}
            />
          )}

          {/* User Full Name */}
          <span className="fw-semibold text-primary">
            {user?.fullName || "User"}
          </span>

          {/* Profile Button */}
          <button 
            className="btn btn-outline-primary btn-sm px-3"
            onClick={() => alert("Open Profile Page")}
          >
            Profile
          </button>

          {/* Logout */}
          <button 
            className="btn btn-danger btn-sm px-3"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div className="p-4">
        <h3>Welcome, {user?.fullName} 👋</h3>

        <p className="text-muted mb-1">Email: {user?.email}</p>
        <p className="text-muted">Role: {user?.role}</p>
      </div>
    </div>
  );
};

export default Dashboard;










// import React, { useEffect, useState } from "react";

// const Dashboard: React.FC = () => {
//   const [userName, setUserName] = useState<string>("");

//   useEffect(() => {
//     // Example: If you store user info in localStorage on login
//     const storedUser = localStorage.getItem("userData");

//     if (storedUser) {
//       const parsed = JSON.parse(storedUser);
//       setUserName(parsed.name || "User");
//     } else {
//       // If no user data found, show default
//       setUserName("User");
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("accessToken");
//     localStorage.removeItem("userData");

//     window.location.href = "/login"; // redirect to login
//   };

//   return (
//     <div className="container-fluid p-0">
//       {/* HEADER */}
//       <nav className="navbar navbar-light bg-white shadow-sm px-4 py-3 d-flex justify-content-between align-items-center">
        
//         {/* Left side */}
//         <h4 className="m-0 fw-bold">Dashboard</h4>

//         {/* Right side */}
//         <div className="d-flex align-items-center gap-3">

//           {/* User Name */}
//           <span className="fw-semibold text-primary">
//             {userName}
//           </span>

//           {/* Profile Button */}
//           <button 
//             className="btn btn-outline-primary btn-sm px-3"
//             onClick={() => alert("Open Profile Page")}
//           >
//             Profile
//           </button>

//           {/* Logout Button */}
//           <button 
//             className="btn btn-danger btn-sm px-3"
//             onClick={handleLogout}
//           >
//             Logout
//           </button>
//         </div>
//       </nav>

//       {/* MAIN DASHBOARD BODY */}
//       <div className="p-4">
//         <h3>Welcome, {userName} 👋</h3>
//         <p className="text-muted">You are successfully logged in.</p>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
