import React from 'react';

const Card = ({ recruiterData }) => {
  const { id, name, role, phone, email } = recruiterData;

  return (
    <a href={`student/${id}`}>
      <div className='w-1/4 p-4 justify-center items-center'>
        <div className="h-96 w-80 bg-[#f7f7fb] p-10 rounded-xl shadow-lg flex flex-col justify-space-around items-center gap-4 border-2 border-zinc-300">
          <span className='text-black'>{id}</span>
          {/* recruiter dp */}
          <div className="rounded-full h-[120px] object-cover border-2 border-zinc-300">
            {/* Placeholder for Image */}
          </div>
          <h1 className="text-lg font-bold">{name}</h1>
          <h1 className="text-md p-2 font-bold bg-violet-100 rounded-xl w-44 text-center text-zinc-900">
            {role}
          </h1>
          <h1>{phone}</h1>
          <h1 className="text-zinc-700">{email}</h1>
        </div>
      </div>
    </a>
  );
};

export default Card;