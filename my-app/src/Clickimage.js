import React, { useState } from 'react';

function Clickconsole() {
  const [imageVisible, setImageVisible] = useState(false);

  const handleClick = () => {
    setImageVisible(true);
  };

  const [imageVisibl, setImageVisibl] = useState(false);

  const handleClic = () => {
    setImageVisibl(true);
  };


  return (
  <>
  <div className='d-flex justify-content-evenly'>
    <div>
      <button onClick={handleClick}>Show Image</button>
      {imageVisible && (
        <img src={'https://netnordic.com/wp-content/uploads/2022/04/ai-machine-learning_web_1-scaled.jpg'} width={500} height={300} alt="example" />
      )}
    </div>
    <div >
     <button onClick={handleClic}>Show Image</button>
     {imageVisibl && (
       <img src={'https://netnordic.com/wp-content/uploads/2022/04/ai-machine-learning_web_1-scaled.jpg'} width={500} height={300} alt="example" />
     )}
    </div>
    </div>
    <hr></hr>
  </>
  );
     }
export default Clickconsole;
