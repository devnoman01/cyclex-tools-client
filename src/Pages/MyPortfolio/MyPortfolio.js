import React from "react";

const MyPortfolio = () => {
  return (
    <div className="max-w-6xl w-full mx-auto">
      <div className="container mx-auto w-full my-16">
        <h1 className="text-5xl text-primary text-center font-medium">
          Welcome to My Portfolio
        </h1>
        <div className="my-10 px-3">
          <div className="grid reve grid-cols-1 lg:grid-cols-3 py-5 items-center align-middle">
            <div className="lg:col-span-2">
              <h1 className="text-center lg:text-left mb-3 text-3xl lg:text-5xl font-medium">
                Md. Abdullah Al Noman
              </h1>
              <h3 className="text-center text-lg lg:text-left lg:text-2xl font-medium">
                Fullstack Developer, Tech Enthusiast
              </h3>
              <p className="text-center lg:text-left text-lg">
                Contact: devnoman01@gmail.com
              </p>
            </div>
            <div className="lg:col-span-1 p-3 justify-center text-center">
              <img
                className="rounded-full mx-auto mt-8 lg:mt-0 w-56 border-2 border-primary"
                src="https://avatars.githubusercontent.com/u/67538033"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="">
          <h2 className="W-full text-center text-5xl font-medium mb-10">
            My Skills
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
            <div className="flex gap w-full p-6 align-middle justify-center">
              <img
                className="w-20 mx-auto"
                src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                alt=""
              />
            </div>
            <div className="flex gap w-full p-6 align-middle justify-center">
              <img
                className="w-20 mx-auto"
                src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
                alt=""
              />
            </div>
            <div className="flex gap w-full p-6 align-middle justify-center">
              <img
                className="w-20 mx-auto"
                src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png"
                alt=""
              />
            </div>
            <div className="flex gap w-full p-6 align-middle justify-center">
              <img
                className="w-20 mx-auto"
                src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                alt=""
              />
            </div>
            <div className="flex gap w-full p-6 align-middle justify-center">
              <img
                className="w-20 mx-auto"
                src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png"
                alt=""
              />
            </div>
            <div className="flex gap w-full p-6 align-middle justify-center">
              <img
                className="w-20 mx-auto"
                src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                alt=""
              />
            </div>
            <div className="flex gap w-full p-6 align-middle justify-center">
              <img
                className="w-20 mx-auto"
                src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
                alt=""
              />
            </div>
            <div className="flex gap w-full p-6 align-middle justify-center">
              <img
                className="w-20 mx-auto"
                src="https://cdn-icons-png.flaticon.com/512/919/919847.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="my-20 w-full">
          <h2 className="W-full text-center text-5xl font-medium mb-10">
            My Projects
          </h2>
          <div className="border rounded-md my-4 p-4">
            <h2 className="text-3xl font-medium mb-3">Automobile Inventory</h2>
            <h2 className="text-xl">
              Live view:{" "}
              <a
                className="text-primary cursor-pointer"
                href="https://automobile-inventory.web.app/"
              >
                https://automobile-inventory.web.app/
              </a>
            </h2>
            <h2 className="text-2xl">
              Technology used: React, Node, Mongo, Express
            </h2>
          </div>
          <div className="border rounded-md my-4 p-4">
            <h2 className="text-3xl font-medium mb-3">
              Independent PC Service Engineer
            </h2>
            <h2 className="text-xl">
              Live view:{" "}
              <a
                className="text-primary cursor-pointer"
                href="https://pc-hardware-man-41232.web.app/"
              >
                https://pc-hardware-man-41232.web.app/
              </a>
            </h2>
            <h2 className="text-xl">
              Technology used: React, Node, Express, Javascript, ES
            </h2>
          </div>
          <div className="border rounded-md my-4 p-4">
            <h2 className="text-3xl font-medium mb-3">Review Hub</h2>
            <h2 className="text-xl">
              Live view:{" "}
              <a
                className="text-primary cursor-pointer"
                href="https://review-hub-devnoman01.netlify.app/"
              >
                https://review-hub-devnoman01.netlify.app/
              </a>
            </h2>
            <h2 className="text-2xl">
              Technology used: React, Node, Javascript, ES
            </h2>
          </div>
        </div>
        <div className="my-20 w-full">
          <h2 className="W-full text-center text-5xl font-medium mb-10">
            Educational Qualification
          </h2>
          <div className="border rounded-md my-4 p-4">
            <h2 className="text-3xl font-medium mb-3">Bachelor of Science</h2>
            <h2 className="text-xl">Computer Science and Engineering</h2>
            <h2 className="text-2xl">East Delta University</h2>
          </div>
          <div className="border rounded-md my-4 p-4">
            <h2 className="text-3xl font-medium mb-3">
              Diploma in Engineering
            </h2>
            <h2 className="text-xl">Computer Technology</h2>
            <h2 className="text-2xl">Chittagong Polytechnic Institute</h2>
          </div>
          <div className="border rounded-md my-4 p-4">
            <h2 className="text-3xl font-medium mb-3">
              Secondary School Certificate
            </h2>
            <h2 className="text-xl">Science</h2>
            <h2 className="text-2xl">Bangladesh Railway Govt. High School</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
