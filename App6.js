import React,{useState, useEffect} from "react"

function App() {
  const [count,setCount] = useState(1);
  const [name,setName] = useState('');

  const handlecountUpdate =()=>{
  setCount ( count+1 )
  };

  const handleinputChange = (e) =>{
  setName(e.target.value);
};

//렌더링마다 메번 실행된 -렌더링 이후
//useEffect(()=>{
//console.log('렌더링');
//});

//마운팅 + count가 변화할때마다 실행됨
//useEffect(()=>{
//console.log('count변화');
//},[count]);

//마운팅 + name이 변경될때마다 실행됨
//useEffect(()=>{
//console.log('name이 변화')
//},[name]);

useEffect(()=>{
console.log('마운팅');
},[]);
  
return (
    <div>
      <button onClick={handlecountUpdate}>Update</button>
      <span>count:{count}</span>
      <input type ='text' value={name} onChange={handleinputChange}/>
      <span>name: {name} </span>
    </div>
  );
}

export default App;
