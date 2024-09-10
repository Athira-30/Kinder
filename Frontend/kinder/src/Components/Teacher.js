import React from 'react';
import "./css/style.css"
const Team = () => {
  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="text-center pb-2">
          <p className="section-title px-5">
            <span className="px-2">Our Teachers</span>
          </p>
          <h1 className="mb-4">Meet Our Teachers</h1>
        </div>
        <div className="row">
          {[
            { name: 'Julia Smith', role: 'Music Teacher', image: './Image/team-1.jpg' },
            { name: 'Jhon Doe', role: 'Language Teacher', image: './Image/team-2.jpg' },
            { name: 'Mollie Ross', role: 'Dance Teacher', image: './Image/team-3.jpg' },
            { name: 'Donald John', role: 'Art Teacher', image: './Image/team-4.jpg' }
          ].map((teacher, index) => (
            <div className="col-md-6 col-lg-3 text-center team mb-5" key={index}>
              <div className="position-relative overflow-hidden mb-4" style={{ borderRadius: '100%' }}>
                <img className="img-fluid w-100" src={teacher.image} alt={teacher.name} />
                <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                  <a
                    className="btn btn-outline-light text-center mr-2 px-0"
                    style={{ width: '38px', height: '38px' }}
                    href="#"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="btn btn-outline-light text-center mr-2 px-0"
                    style={{ width: '38px', height: '38px' }}
                    href="#"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-outline-light text-center px-0"
                    style={{ width: '38px', height: '38px' }}
                    href="#"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
              <h4>{teacher.name}</h4>
              <i>{teacher.role}</i>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
