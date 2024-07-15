import React from 'react';
import Greeting from './components/Greeting';
import Counter from './components/Counter';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Greeting name="John mbadi" />
      <Counter />
    </div>
  );
};

export default App;
