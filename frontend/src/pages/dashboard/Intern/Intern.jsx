import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RecruiterCard from './RecruiterCard';

const Intern = () => {
  const [selectedRecruiter, setSelectedRecruiter] = useState(null);
  const navigate = useNavigate();

  const recruiters = [
    {
      id: 1,
      name: 'Recruiter 1',
      skills: ['JavaScript', 'React', 'Node.js'],
      description: 'We are looking for a talented JavaScript developer to join our team. The ideal candidate should have strong skills in React and Node.js, and be passionate about creating high-quality web applications. Responsibilities include developing frontend and backend components, collaborating with other team members, and ensuring code quality and performance.',
      salary: '$60,000 - $80,000',
      duration: 'Full-time',
      status: 'active',
      location: ' pune'
    },
    {
      id: 2,
      name: 'Recruiter 2',
      skills: ['Python', 'Django', 'REST API'],
      description: 'We are seeking a Python developer with experience in Django and building RESTful APIs. The ideal candidate should have a strong understanding of backend development and be capable of designing and implementing scalable and efficient solutions. Responsibilities include developing and maintaining backend services, writing clean and maintainable code, and collaborating with cross-functional teams.',
      salary: '$70,000 - $90,000',
      duration: 'Contract',
      status: 'active',
      location: ' pune'
    },
    {
      id: 2,
      name: 'Recruiter 2',
      skills: ['Python', 'Django', 'REST API'],
      description: 'We are seeking a Python developer with experience in Django and building RESTful APIs. The ideal candidate should have a strong understanding of backend development and be capable of designing and implementing scalable and efficient solutions. Responsibilities include developing and maintaining backend services, writing clean and maintainable code, and collaborating with cross-functional teams.',
      salary: '$70,000 - $90,000',
      duration: 'Contract',
      status: 'active',
      location: ' pune'
    },
    {
      id: 2,
      name: 'Recruiter 2',
      skills: ['Python', 'Django', 'REST API'],
      description: 'We are seeking a Python developer with experience in Django and building RESTful APIs. The ideal candidate should have a strong understanding of backend development and be capable of designing and implementing scalable and efficient solutions. Responsibilities include developing and maintaining backend services, writing clean and maintainable code, and collaborating with cross-functional teams.',
      salary: '$70,000 - $90,000',
      duration: 'Contract',
      status: 'active',
      location: ' pune'
    },
    {
      id: 2,
      name: 'Recruiter 2',
      skills: ['Python', 'Django', 'REST API'],
      description: 'We are seeking a Python developer with experience in Django and building RESTful APIs. The ideal candidate should have a strong understanding of backend development and be capable of designing and implementing scalable and efficient solutions. Responsibilities include developing and maintaining backend services, writing clean and maintainable code, and collaborating with cross-functional teams.',
      salary: '$70,000 - $90,000',
      duration: 'Contract',
      status: 'active',
      location: ' pune'
    },
    {
      id: 3,
      name: 'Recruiter 3',
      skills: ['Java', 'C++', 'SpringBoot', 'Hibernate', 'SQL', 'MySQL'],
      description: 'We are hiring a Java developer to join our team. The successful candidate will work on developing enterprise-grade applications using Java, Spring Boot, and Hibernate. Responsibilities include designing and implementing robust and scalable solutions, writing clean and maintainable code, and collaborating with team members to deliver high-quality software products.',
      salary: '$80,000 - $100,000',
      duration: 'Part-time',
      status: 'active',
      location: ' pune'
    }
  ];


  const interData = {
    id: 1,
    name: 'Murtuza',
    email: 'I8sJt@example.com',
  }

  const handleRecruiterClick = (recruiter) => {
    setSelectedRecruiter(recruiter);
    navigate("/recruiter/")
  };

  return (
    <div className='h-screen w-screen bg-white p-5 flex flex-col overflow-x-hidden'>
      {/* Navbar */}
      <div className="w-full h-20 py-2 rounded-2xl shadow-2xl bg-zinc-800 text-white pl-10 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="logo" className="w-14 h-14" />
          <h1 className='text-xl'>
            {interData.name}
          </h1>
        </div>
        <div className='flex gap-8 ml-auto'>
          {/* Filter icon */}
          <button className='flex gap-4'>
            <svg width="36" height="36" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              {/* Add your SVG path here */}
            </svg>
          </button>
          {/* Logout icon */}
          <button className='flex gap-2 items-center mr-4' >
            <svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {/* Add your SVG path here */}
            </svg>
            Logout
          </button>
        </div>
      </div>

      {/* Dashboard */}
      <div className='p-5 w-full h-auto flex gap-20'>
        <h1 className='font-bold text-3xl'>Recruiters <span className='text-violet-500'>{recruiters.length}</span></h1>
      </div>

      {/* Recruiter Cards */}
      <div className='w-full h-auto'>
        <div className='flex flex-wrap gap-7'>
          {recruiters.filter(recruiter => recruiter.status === 'active').map((recruiter, index) => (
            <div key={index} className="max-w-sm w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4">
              <Link to={`/intern/${recruiter.id}`} >
                <div className="border border-gray-200 rounded-lg p-4 shadow shadow-zinc-700 cursor-pointer" onClick={() => handleRecruiterClick(recruiter)}>
                  <div className='flex justify-center items-center my-2'>
                    <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="logo" className="w-14 h-14" />

                  </div>
                  <h2 className="text-xl font-semibold">{recruiter.name}</h2>
                  <p className="text-gray-600">
                    <b>Skills</b></p>
                  <div className="flex flex-wrap mt-2">
                    {recruiter.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="text-zinc-600 bg-purple-200 py-1 px-2 mr-1 mb-1 rounded-lg"
                        style={{ maxWidth: 'calc(100% - 1rem)' }} // Limit width to card width
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600"><b>Salary </b> : {recruiter.salary}</p>
                  <p className="text-gray-600"><b>Location </b> : {recruiter.location}</p>
                  <p className="text-gray-600"><b>Duration </b> : {recruiter.duration}</p>
                </div>
              </Link>            
            </div>
          ))}
        </div>
      </div>



    </div>
  );
}

export default Intern;
