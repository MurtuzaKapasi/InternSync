import React from 'react';
import { useParams } from 'react-router-dom';

function RecruiterCard({ recruiter }) {
  const {id} = useParams();
  console.log("Recruiter ID:", id);


  


  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="md:flex">
        {/* <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover md:w-48" src={`https://example.com/${recruiter.id}.jpg`} alt={`${recruiter.name}`} />
        </div> */}
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{recruiter.name}</div>
          <p className="mt-2 text-gray-600">{recruiter.description}</p>
          <div className="mt-4">
            <p className="text-gray-700">Skills: {recruiter.skills.join(', ')}</p>
            <p className="text-gray-700">Salary: {recruiter.salary}</p>
            <p className="text-gray-700">Duration: {recruiter.duration}</p>
            <p className="text-gray-700">Location: {recruiter.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecruiterCard;
