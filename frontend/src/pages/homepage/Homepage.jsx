import React from 'react';
import { Button } from '../../components/button';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate('/signin');
  };

  const handleGetStartedClick = () => {
    navigate('/register');
  };

  return (
    <div className="bg-[#fbfbfb] h-screen w-screen p-10  ">

      {/* topbar */}
      <div className="h-[10vh] w-screen flex  items-center justify-between">
          <div className="flex gap-5 justify-center items-center">
              <svg width="64" height="64" viewBox="0 0 717 717" xmlns="http://www.w3.org/2000/svg">
                <path fill="#000000" d="m333 276l80-81c7-7 15-16 23-26c8-9 17-17 26-24c17-15 37-28 62-28c22 0 41 10 55 23s22 32 22 54c0 9-1 19-4 26c-7 14-13 24-19 32c-3 4-6 8-6 12c0 3 0 6 2 7c11 27 19 50 24 78c3 11 9 16 19 16c4 0 8-1 12-4c8-5 15-13 22-21c4-4 7-8 9-10c36-35 57-85 57-136c0-54-22-102-57-137c-35-34-84-57-136-57S422 21 387 58L250 194c-36 37-56 85-56 136c0 15 6 46 16 75c10 28 23 53 40 53c9 0 28-15 44-32s32-36 32-43c0-5-4-11-8-20c-5-9-7-20-7-33c0-20 8-40 22-54m-3 384l137-136c36-35 56-86 56-137c0-15-6-45-16-74c-9-28-23-54-40-54c-7 0-28 16-43 33c-17 17-33 35-33 42c0 5 3 13 8 21c5 9 9 19 9 32c-1 20-9 40-23 56l-81 80c-7 8-15 16-23 25l-25 25c-17 16-38 27-63 27c-42 0-76-33-76-76c0-10 2-19 5-26c6-14 12-24 19-32c3-4 4-8 4-11c0-2-1-4-2-8c-12-27-19-50-24-78c-2-5-3-9-6-11c-3-4-8-5-13-5c-4 0-7 1-11 4c-8 5-16 13-23 21c-3 4-7 7-9 9c-36 36-57 86-57 137c0 53 21 102 57 137c35 35 83 56 136 56c52 0 102-20 137-57"/>
              </svg>
            <h1 className="text-5xl font bold">
              MentorLink
            </h1>
          </div>

        <Button className="w-52 h-12 text-lg border-black mr-40" onClick={handleSignInClick}>Sign In</Button>
      </div>

      {/* main */}
      <div className="h-[90vh] w-screen flex justify-center items-center">
        <div className="h-full w-1/2 flex flex-col items-left justify-center p-5 gap-5">
          <h1 className="text-[4rem] font-bold"> Connect with Your <br />
            Mentor → Personalized <br />
            Guidance
          </h1>
          <p className="text-[1.5rem]">
          Discover tailored mentorship at MentorLink. Find the ideal mentor <br /> to fuel your academic and career success. Join today!
          </p>

          <Button variant={"outline"} className="border-black border-2 text-lg w-52 h-12 mt-5" onClick={handleGetStartedClick}>Get started</Button>


        </div>
        <div className="h-full w-1/2 flex items-center">
          <img
            src="/MentorLink.svg"
            alt="mentorship"
            width={600}
            height={600}
          />
        </div>

      </div>


    </div>
  );
}

export default Homepage;