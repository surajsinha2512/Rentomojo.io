import React,{useState,useEffect} from 'react';
import Posts from './Posts';

const Home=()=>{
const [userInfo,setUserInfo]=useState([]);
const [company,setCompany]=useState('');
const [name,setName]=useState('');
const [userId,setUserId]=useState('');
const [showPost,setShowPost]=useState(false)
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


    {!showPost?<div claasName="container">Click On the Box to see Post which User made</div>:null}
     
     
      {showPost?<div className="col"><Posts userId={userId}/></div>:null}
     <br></br>

        <div>
        <input placeholder="Search By Name" onChange={(event)=>{setName(event.target.value)}} style={{margin:"10px"}}  />
        <input placeholder="Search By Company" onChange={(event)=>{setCompany(event.target.value)}}/>
        </div>

      

            <div className="container ">
            <div className="row bg-primary p-2">
            <div className="col">Name</div>
            <div className="col">company</div>
            <div className="col">Blog Site</div>
           
            </div>
            </div>
      {
          userInfo.filter(temp => temp.name.includes(name) && temp.company.name.includes(company)).map((output)=>{
              return(
                  <>
                <div className="container" style={{boxShadow :"10px 10px 8px #888888"}} onClick={(event)=>{setUserId(output.id); setShowPost(true)}}>
                    <div className="row bg-light" >
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