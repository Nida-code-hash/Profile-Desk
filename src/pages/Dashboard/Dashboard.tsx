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

  return (
    <>

      {/* ----------------------------- */}
      {/*          HERO SECTION          */}
      {/* ----------------------------- */}
      <section
        id="home"
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
                Welcome, {user?.fullName}
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






// email: john@example.com
// password: 12345678
