import React from 'react';
import "./css/style.css"
const Testimonial = () => {
  const testimonials = [
    {
      text: "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum clita",
      img: "./Image/testimonial-1.jpg",
      name: "Parent Name",
      profession: "Profession",
    },
    {
      text: "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum clita",
      img: "./Image/testimonial-2.jpg",
      name: "Parent Name",
      profession: "Profession",
    },
    {
      text: "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum clita",
      img: "./Image/testimonial-3.jpg",
      name: "Parent Name",
      profession: "Profession",
    },
    {
      text: "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum clita",
      img: "./Image/testimonial-4.jpg",
      name: "Parent Name",
      profession: "Profession",
    },
  ];

  return (
    <div className="container-fluid py-5">
      <div className="container p-0">
        <div className="text-center pb-2">
          <p className="section-title px-5">
            <span className="px-2">Testimonial</span>
          </p>
          <h1 className="mb-4">What Parents Say!</h1>
        </div>
        <div className="owl-carousel testimonial-carousel">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-item px-3" key={index}>
              <div className="bg-light shadow-sm rounded mb-4 p-4">
                <h3 className="fas fa-quote-left text-primary mr-3"></h3>
                {testimonial.text}
              </div>
              <div className="d-flex align-items-center">
                <img
                  className="rounded-circle"
                  src={testimonial.img}
                  style={{ width: '70px', height: '70px' }}
                  alt="Testimonial"
                />
                <div className="pl-3">
                  <h5>{testimonial.name}</h5>
                  <i>{testimonial.profession}</i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
