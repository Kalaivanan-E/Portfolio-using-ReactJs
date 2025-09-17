import React from "react";
import profilePic from '../assets/img.jpg'// update path to your image

const About = () => {
  return (
    <section className="about py-5">
      <div className="container">
        {/* Title */}
        <h2
          className="text-center fw-bold text-primary"
          style={{
            color: "blue",
            fontSize: "35px",
            marginBottom: "50px",
            fontWeight:'bold'
          }}
        >
          About
          {/* <div
            style={{
              width: "80px",
              height: "4px",
              background: "blue",
              margin: "8px auto 0",
              borderRadius: "2px",
            }}
          ></div> */}
        </h2>

        {/* Content */}
        <div className="row align-items-center">
          {/* Image */}
          <div className="col-md-6 text-center">
            <img
              src={profilePic}
              alt="Profile"
              className="img-fluid"
              style={{
                width: "400px",
                height: "400px",
                objectFit: "cover",
                borderRadius: "20px",
              }}
            />
          </div>

          {/* Text */}
          <div className="col-md-6">
            <h1 className="fw-bold mb-3 text-primary">I'm Kalaivanan</h1>
            <p style={{ fontSize: "18px", lineHeight: "1.8" }}>
              Hi, I’m <b>Kalaivanan E</b>, a passionate Full Stack Developer in the making.
              I recently graduated and I’m currently pursuing a <b>Java Full Stack Development</b> course.
              Skilled in <b>React.js, Bootstrap, SQL, and MongoDB</b>, I enjoy creating clean and responsive web applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
