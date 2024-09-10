import React from 'react';
import "./css/style.css"
const LatestBlog = () => {
  const blogs = [
    {
      img: "./Image/blog-1.jpg",
      title: "Diam amet eos at no eos",
      author: "Admin",
      category: "Web Design",
      comments: 15,
      description:
        "Sed kasd sea sed at elitr sed ipsum justo, sit nonumy diam eirmod, duo et sed sit eirmod kasd clita tempor dolor stet lorem. Tempor ipsum justo amet stet...",
      link: "#",
    },
    {
      img: "./Image/blog-2.jpg",
      title: "Diam amet eos at no eos",
      author: "Admin",
      category: "Web Design",
      comments: 15,
      description:
        "Sed kasd sea sed at elitr sed ipsum justo, sit nonumy diam eirmod, duo et sed sit eirmod kasd clita tempor dolor stet lorem. Tempor ipsum justo amet stet...",
      link: "#",
    },
    {
      img: "./Image/blog-3.jpg",
      title: "Diam amet eos at no eos",
      author: "Admin",
      category: "Web Design",
      comments: 15,
      description:
        "Sed kasd sea sed at elitr sed ipsum justo, sit nonumy diam eirmod, duo et sed sit eirmod kasd clita tempor dolor stet lorem. Tempor ipsum justo amet stet...",
      link: "#",
    },
  ];

  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="text-center pb-2">
          <p className="section-title px-5">
            <span className="px-2">Latest Blog</span>
          </p>
          <h1 className="mb-4">Latest Articles From Blog</h1>
        </div>
        <div className="row pb-3">
          {blogs.map((blog, index) => (
            <div className="col-lg-4 mb-4" key={index}>
              <div className="card border-0 shadow-sm mb-2">
                <img className="card-img-top mb-2" src={blog.img} alt={blog.title} />
                <div className="card-body bg-light text-center p-4">
                  <h4 className="">{blog.title}</h4>
                  <div className="d-flex justify-content-center mb-3">
                    <small className="mr-3">
                      <i className="fa fa-user text-primary"></i> {blog.author}
                    </small>
                    <small className="mr-3">
                      <i className="fa fa-folder text-primary"></i> {blog.category}
                    </small>
                    <small className="mr-3">
                      <i className="fa fa-comments text-primary"></i> {blog.comments}
                    </small>
                  </div>
                  <p>{blog.description}</p>
                  <a href={blog.link} className="btn btn-primary px-4 mx-auto my-2">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;
