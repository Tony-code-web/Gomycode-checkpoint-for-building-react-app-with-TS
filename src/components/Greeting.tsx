import React from 'react';

interface GreetingProps {
  name: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div className="text-center text-2xl font-bold text-blue-500">Hello, {name}!</div>;
};

export default Greeting;
