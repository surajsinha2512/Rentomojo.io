import React,{useState,useEffect} from 'react';

const Home=()=>{
const [userInfo,setUserInfo]=useState([]);
useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/users').then((res)=>{
    return res.json();
}).then((res)=>{
  setUserInfo(state=>[...state,...res]);
  console.log(userInfo )
})
},[])
    return(
        <>
      {
          userInfo.map((output)=>{
              return(
                  <>
                <div className="container">
                    <div className="row">
                    <div className="col">{output.name}</div>
                    <div className="col">{output.company.name}</div>
                    <div className="col">{output.website}</div>
                     </div>
                </div>
                  </>
              )
          })
      }
        </>
    )
}

export default Home;