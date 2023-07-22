import React,{useState} from 'react'

function VenderProfile() {
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  return (
    <div >
      <div className="content-body">
        <div className="container-fluid">
          <div class="row d-flex justify-content-center">
            <form>
              <input
                type="text" value={name}  
                onChange={(e) => setName(e.target.value)}/>

              <input type="file" value={selectedFile}
                onChange={(e) => setSelectedFile(e.target.files[0])}
              />
            </form>
            </div>
      </div>
      </div>
      
    </div>
  );
}

export default VenderProfile;
