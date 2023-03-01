import React from 'react';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <section className='max-w-[1200px] mx-auto'>
      <h1 className='font-semibold ml-5 mt-5'> Simple Image Editor </h1>

      <section className='flex'>
        
          <Sidebar />
        
          Main Editor
      </section>

      <footer className='my-20 text-center'>
        <p> Open source. See repo here </p>
        <p> Made by <a href="https://about.hilman.space/" >hilman</a>  </p>
      </footer>
    </section>
  );
}

export default App;
