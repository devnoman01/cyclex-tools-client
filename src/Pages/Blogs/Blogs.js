import React from "react";
import Footer from "../../Components/Footer";

const Blogs = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <div className="container mx-auto px-3">
          <h1 className="text-center text-4xl text-primary md:text-5xl font-medium mt-10 mb-16">
            Latest Blogs
          </h1>
          <div>
            {/* Blog - 14.1 */}
            <article className="w-full p-5 border rounded-md shadow-md flex flex-col lg:flex-row gap-5 my-12">
              <div className="w-full lg:w-1/3">
                <img
                  src="https://blog.nimbleways.com/content/images/2020/04/react-perf.png"
                  alt=""
                />
              </div>
              <div className="w-full lg:w-2/3">
                <h2 className="text-xl font-medium text-center md:text-left">
                  How will you improve the performance of a React Application?
                </h2>
                <p className="text-justify mt-3">
                  A React application may be made more efficient in a variety of
                  ways. As an example, wherever possible, keep state of
                  components local. Memorying React components to avoid unwanted
                  re-renders is also a good strategy. In addition, dynamic
                  imports in React allow for code-splitting (). React's
                  virtualization of windows or lists. In React, photos may be
                  loaded in a 'lazy' manner. Making Use of Structural
                  Consistency. As many chunk files as you'd want.
                </p>
              </div>
            </article>

            {/* Blog - 14.2 */}
            <article className="w-full p-5 border rounded-md shadow-md flex flex-col lg:flex-row gap-5 my-12">
              <div className="w-full lg:w-1/3">
                <img
                  src="https://cdn.educba.com/academy/wp-content/uploads/2021/02/React-State-Management.jpg"
                  alt=""
                />
              </div>
              <div className="w-full lg:w-2/3">
                <h2 className="text-xl font-medium text-center md:text-left">
                  What are the different ways to manage a state in a React
                  application?
                </h2>
                <p className="text-justify mt-3">
                  The four major forms of state you need to keep track of in
                  your React projects are: Local state, Global state, Server
                  state, and URL state. A component's local state refers to the
                  data it keeps. Managing local state in React is often
                  accomplished via the usage of the useState hook. Additionally,
                  for both local and global states, useReducer is an option that
                  may be implemented in any way. Under the hood, it is quite
                  similar to useState, except that it takes a reducer instead of
                  a starting state. You'd need local state for things like
                  showing or hiding a modal component and keeping track of input
                  data for forms that have been disabled.
                </p>
              </div>
            </article>

            {/* Blog - 14.3 */}
            <article className="w-full p-5 border rounded-md shadow-md flex flex-col lg:flex-row gap-5 my-12">
              <div className="w-full lg:w-1/3">
                <img
                  src="https://jslib.dev/wp-content/uploads/2022/03/objects-prototype-and-prototypal-inheritance.jpg"
                  alt=""
                />
              </div>
              <div className="w-full lg:w-2/3">
                <h2 className="text-xl font-medium text-center md:text-left">
                  How does prototypical inheritance work?
                </h2>
                <p className="text-justify mt-3">
                  There is an unnoticed [[Prototype]] property in every object
                  in addition to its methods and attributes. JavaScript's
                  Prototypal Inheritance capability may be used to provide extra
                  methods and properties to objects. Inheritance is a process
                  through which an object may take on the traits and behaviors
                  of another object. The [[Prototype]] of an object may
                  typically be obtained and modified using the
                  Object.getPrototypeOf and Object.setPrototypeOf methods. The
                  __proto__ method is now often used in modern languages to set
                  it.
                </p>
              </div>
            </article>

            {/* Blog - 14.5 */}
            <article className="w-full p-5 border rounded-md shadow-md flex flex-col lg:flex-row gap-5 my-12">
              <div className="w-full lg:w-1/3">
                <img
                  src="https://cdn.educba.com/academy/wp-content/uploads/2020/04/JavaScript-find.jpg"
                  alt=""
                />
              </div>
              <div className="w-full lg:w-2/3">
                <h2 className="text-xl font-medium text-center md:text-left">
                  You have an array of products. Each product has a name, price,
                  description, etc. How will you implement a search to find
                  products by name?
                </h2>
                <p className="text-justify mt-3">
                  In order to discover a product by its name in an array, we
                  will use array.find(). To get a truthy value, the callbackFn
                  function is called once for each index in the array. If so,
                  find returns the element's value instantly. Unless this is the
                  case, find returns an error. For every index in the array,
                  callbackFn is called, not only those that have been given
                  values. If you use the callbackFn function offered by find,
                  you may change the array that it is called on. Before the
                  initial callbackFn activation, the items found by find are
                  pre-set. Using Javascript's arr.find() function, you may
                  obtain the value of the first member in an array that meets
                  your criteria. If any of the array's items meet the criterion,
                  the first one to meet it will print.
                </p>
              </div>
            </article>

            {/* Blog - 14.6 */}
            <article className="w-full p-5 border rounded-md shadow-md flex flex-col lg:flex-row gap-5 my-12">
              <div className="w-full lg:w-1/3">
                <img
                  src="https://ucarecdn.com/39483ff6-4269-400d-bca7-1dd059c31c02/"
                  alt=""
                />
              </div>
              <div className="w-full lg:w-2/3">
                <h2 className="text-xl font-medium text-center md:text-left">
                  What is a unit test? Why should write unit tests?
                </h2>
                <p className="text-justify mt-3">
                  Unit testing is testing the smallest testable unit of an
                  application. It is done during the coding phase by the
                  developers. To perform unit testing, a developer writes a
                  piece of code (unit tests) to verify the code to be tested
                  (unit) is correct.
                  <br />
                  As unit testing ensures that all code meets quality standards
                  before it's deployed. This ensures a reliable engineering
                  environment where quality is paramount. Over the course of the
                  product development life cycle, unit testing saves time and
                  money, and helps developers write better code, more
                  efficiently. Thats why we should write unit tests.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </>
  );
};

export default Blogs;
