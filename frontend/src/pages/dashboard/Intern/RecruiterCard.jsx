import React from 'react';
import { useParams } from 'react-router-dom';

function RecruiterCard({ recruiter }) {
  const { id } = useParams();
  console.log("Recruiter ID:", id);

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

  const selectedRecruiter = recruiters.find(recruiter => recruiter.id === parseInt(id));




  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="md:flex justify-center">
        {/* <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover md:w-48" src={`https://example.com/${recruiter.id}.jpg`} alt={`${recruiter.name}`} />
        </div> */}
        <h2>Recruiter card page { id}</h2>
        <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{selectedRecruiter.name}</div>
      <p className="mt-2 text-gray-600">{selectedRecruiter.description}</p>
      <div className="mt-4">
        <p className="text-gray-700">Skills: {selectedRecruiter.skills.join(', ')}</p>
        <p className="text-gray-700">Salary: {selectedRecruiter.salary}</p>
        <p className="text-gray-700">Duration: {selectedRecruiter.duration}</p>
        <p className="text-gray-700">Location: {selectedRecruiter.location}</p>
      </div>
    </div>
      </div>
    </div>
  );
}

export default RecruiterCard;
