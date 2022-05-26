import React from "react";

const Contact = () => {
  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto w-full lg:px-0">
        <div className="container mx-auto w-full py-8 lg:py-20 px-4 lg:px-0">
          <h1 className="text-center text-4xl md:text-5xl font-medium mb-16 text-secondary">
            Contact Us
          </h1>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:px-0">
            <div className="">
              <div className="w-full border px-3 lg:px-6 py-8 shadow-md rounded-lg bg-base-100">
                <h3 className="text-3xl text-primary text-center mb-5 font-medium">
                  Contact Us
                </h3>
                <div className="form-control w-full my-2">
                  <label className="label">
                    <span className="label-text text-lg font-medium">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="form-control w-full  my-2">
                  <label className="label">
                    <span className="label-text text-lg font-medium">
                      Email
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Email"
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="form-control w-full  my-2">
                  <label className="label">
                    <span className="label-text text-lg font-medium">
                      Contact Number
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Contact Number"
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="form-control w-full  my-2">
                  <label className="label">
                    <span className="label-text text-lg font-medium">
                      Subject
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="form-control w-full  my-2">
                  <label className="label">
                    <span className="label-text text-lg font-medium">
                      Message
                    </span>
                  </label>
                  <textarea
                    type="text"
                    placeholder="Your message"
                    className="textarea textarea-bordered w-full h-20"
                  />
                </div>
                <div className="form-control w-full mt-8">
                  <button className="btn btn-primary text-white">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full bg-base-100 rounded-lg shadow-md border p-4 lg:p-8">
              <img
                className="mx-auto w-full md:w-11/12"
                src="https://img.freepik.com/free-photo/man-working-call-center-with-headphones-computer_23-2149256074.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
