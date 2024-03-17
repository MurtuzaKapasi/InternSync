import React from 'react'
import { useParams } from 'react-router-dom'

const InternCard = () => {
  const {id} = useParams();

  const intern = [
    {
      id: 1,
      name: 'Intern 1',
      skills: ['JavaScript', 'React', 'Node.js'],
      education: 'Bachelor of Computer Science',
      experience: '2 years of internship experience',
      bio: 'Passionate about web development and creating meaningful projects.',
      mobile: '123-456-7890',
      socialMedia: {
        linkedin: 'https://www.linkedin.com/intern1',
        github: 'https://www.github.com/intern1'
      },
      certifications: ['React Developer Certification', 'Node.js Certification']
    },
    {
      id: 2,
      name: 'Intern 2',
      skills: ['Python', 'Django', 'REST API'],
      education: 'Master of Computer Engineering',
      experience: '1 year of internship experience',
      bio: 'Experienced in building RESTful APIs using Django and Python.',
      mobile: '987-654-3210',
      socialMedia: {
        linkedin: 'https://www.linkedin.com/intern2',
        github: 'https://www.github.com/intern2'
      },
      certifications: ['Python Developer Certification', 'Django Certification']
    },
    {
      id: 3,
      name: 'Intern 3',
      skills: ['Java', 'Spring Boot', 'Hibernate', 'SQL'],
      education: 'Bachelor of Science in Computer Engineering',
      experience: '3 years of internship experience',
      bio: 'Skilled in developing enterprise-grade applications using Java and Spring Boot.',
      mobile: '456-789-0123',
      socialMedia: {
        linkedin: 'https://www.linkedin.com/intern3',
        github: 'https://www.github.com/intern3'
      },
      certifications: ['Java Developer Certification', 'Spring Boot Certification']
    },
    {
      id: 4,
      name: 'Intern 4',
      skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      education: 'Bachelor of Technology in Computer Science',
      experience: '1.5 years of internship experience',
      bio: 'Frontend developer with expertise in building responsive web applications.',
      mobile: '789-012-3456',
      socialMedia: {
        linkedin: 'https://www.linkedin.com/intern4',
        github: 'https://www.github.com/intern4'
      },
      certifications: ['Frontend Development Certification', 'Bootstrap Certification']
    },
    {
      id: 5,
      name: 'Intern 5',
      skills: ['Ruby', 'Ruby on Rails', 'RSpec'],
      education: 'Bachelor of Engineering in Information Technology',
      experience: '1 year of internship experience',
      bio: 'Ruby on Rails enthusiast with a passion for test-driven development.',
      mobile: '012-345-6789',
      socialMedia: {
        linkedin: 'https://www.linkedin.com/intern5',
        github: 'https://www.github.com/intern5'
      },
      certifications: ['Ruby on Rails Developer Certification', 'RSpec Certification']
    },
  ];

  const selectedIntern = intern.find(intern => intern.id === parseInt(id));


  return (
    <div className="max-w-sm w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4">
      <div className="border border-gray-200 rounded-lg p-4 shadow shadow-zinc-700 cursor-pointer">
        <div className="flex justify-center items-center my-2">
          <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="logo" className="w-14 h-14" />
        </div>
        <h2 className="text-xl font-semibold">{selectedIntern.name}</h2>
        <p className="text-gray-600"><b>Skills</b></p>
        <div className="flex flex-wrap mt-2">
          {selectedIntern.skills.map((skill, index) => (
            <span
              key={index}
              className="text-zinc-600 bg-purple-200 py-1 px-2 mr-1 mb-1 rounded-lg"
              style={{ maxWidth: 'calc(100% - 1rem)' }} // Limit width to card width
            >
              {skill}
            </span>
          ))}
        </div>
        <p className="text-gray-600"><b>Education</b>: {selectedIntern.education}</p>
        <p className="text-gray-600"><b>Experience</b>: {selectedIntern.experience}</p>
        <p className="text-gray-600"><b>Bio</b>: {selectedIntern.bio.split(' ').slice(0, 8).join(' ')}{selectedIntern.bio.split(' ').length > 8 ? '...' : ''}</p>
        <p className="text-gray-600"><b>Mobile</b>: {selectedIntern.mobile}</p>
        <div className="text-gray-600">
          <b>Social Media</b>:<br />
          <a href={selectedIntern.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a><br />
          <a href={selectedIntern.socialMedia.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <p className="text-gray-600"><b>Certifications</b>: {selectedIntern.certifications.join(', ')}</p>
      </div>
    </div>
  )
}

export default InternCard
