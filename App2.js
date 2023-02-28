import React,{useState} from 'react';

function App(){
  const [username,setUsername] = useState ('');
  const [Password,setPassword] = useState ('');
const onSubmit = () =>{

};  
return(
  <div className='App'>
    <form onSubmit={onSubmit}>
  <input placeholder='Username' 
  value={username} 
  onChange={(e) => setUsername(e.target.value)}
  /><br />
  <input placeholder='Password' 
  value={Password}
  onChange={(e) => setPassword(e.target.value)}
  /><br />
  <button onClick={onSubmit}>Login</button>
  </form>
  </div>
);
}

export default App;