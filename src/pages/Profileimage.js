import React, { useState } from "react";

function Profileimage() {
  const [file, setFile] = useState();
  function handleChange(e) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
  }
  return(
    <div className="App">
      <div>
                <div className="content-body">
                <div className='container-fluid'>
                <div className="App">
            <h2>Add Image:</h2>
            <input type="file" onChange={handleChange} />
            <div className="border-">
            <img src={file}class="rounded-circle" />
            </div>
  
        </div>
      </div>
      </div>
      </div>
    </div>
  );
}
export default Profileimage
