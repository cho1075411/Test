import React,{useMemo, useState} from "react";

const hardCalculate = (namber) =>{
  console.log('어려운계산');
  for (let i = 0; i < 999999999; i ++){} //생각하는 시간
  return namber + 10000;
};
const easyCalculate = (namber) =>{
  console.log('짱 쉬운 계산');
  for (let i = 0; i < 999999999; i ++){} 
  return namber + 1;
};

function App() {
   const[hardNumber,setHardNumber] = useState(1);
   const[easyNumber,setEasyNumber] = useState(2);

   //const hardSum = hardCalculate(hardNumber);
   const hardSum = useMemo(() => {
    return hardCalculate(hardNumber);
   },[hardNumber]);
   const easySum = easyCalculate(easyNumber);

  return (
    <div>
     <h3>어려운 계산기</h3>
     <input 
     type={Number}
     value={hardNumber}
     onChange={(e)=>setHardNumber(parseInt(e.target.value))}
    />
    <spen> + 10000 = {hardSum}</spen>
    
    <h3>쉬운 계산기</h3>
     <input 
     type={Number}
     value={easyNumber}
     onChange={(e)=>setEasyNumber(parseInt(e.target.value))}
    />
    <spen> + 1 = {easySum}</spen>
    
    </div>
  );
}

export default App;
