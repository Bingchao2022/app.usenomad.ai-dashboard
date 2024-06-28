import React from 'react';

const Card = ({ title, value }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 m-4 border border-gray-300 hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{value}</p>
    </div>
  );
};

export default Card;
