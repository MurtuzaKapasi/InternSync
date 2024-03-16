import React from 'react';

const Loginpage = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col lg:flex-row justify-center items-center">
          <div className="lg:w-1/2 flex justify-center items-center border-r lg:border-r-0 border-gray-300 pr-4 lg:pr-0">
            <img
              src="./assets/login_image.svg"
              alt="Login Image"
              className="w-2/3 h-auto"
            />
          </div>
          <div className="lg:w-1/2 flex flex-col justify-center items-center pl-4 lg:pl-0">
            <div className="bg-white p-8 rounded-lg shadow-md w-80">
              <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
              <form className="w-full">
                <div className="mb-4">
                  <label htmlFor="email" className="block text-left text-gray-700 font-semibold mb-1">Email</label>
                  <input type="email" id="email" name="email" placeholder="Enter your email" className="w-full border-gray-300 border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-6">
                  <label htmlFor="password" className="block text-left text-gray-700 font-semibold mb-1">Password</label>
                  <input type="password" id="password" name="password" placeholder="Enter your password" className="w-full border-gray-300 border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500" />
                </div>
                <button type="submit" className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-900 transition duration-300">Login</button>
              </form>
            </div>
          </div>
        </div>
      );
}

export default Loginpage;