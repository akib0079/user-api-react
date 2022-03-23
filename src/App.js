import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <div className="HeaderInfo">
        <img className='logo' src={logo} alt="" />
        <h1>All Users In Community.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatem sapiente qui veritatis quam porro officia, quia laborum, deserunt odit aspernatur non doloribus illo assumenda iste error perferendis molestiae itaque.</p>
      </div>
      <ExternalUsers></ExternalUsers>
    </div>  
  );
}


function ExternalUsers(){
  let [users , setUsers] = useState([]);

  useEffect( () => {
    fetch('https://randomuser.me/api/?results=50')
    .then(res => res.json())
    .then(userData => setUsers(userData.results))
  }, []);

  return(
    <div>
      <div className='AllUsers'>
        {users.map(user =>  <ReadUsers userInfo={user} ></ReadUsers> )}
      </div>
    </div>
  )
}

function ReadUsers(props) {
  const allInfo = props.userInfo;
  return(
      <div className="item">
        <img className='ImgUsers' src={allInfo.picture.medium} alt="" />
        <h4>Name : {allInfo.name.title + allInfo.name.first}</h4>
        <p>Email : {allInfo.email}</p>
        <button className='callBtn'>Contact : {allInfo.cell}</button>
      </div>
  )
}


export default App;
