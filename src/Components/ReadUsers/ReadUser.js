import React from 'react';
import '../Allusers/Allusers.css';
import 'boxicons';


const ReadUser = (props) => {
  const allInfo = props.userInfo;
    return(
        <div className="item">
          <img className='ImgUsers' src={allInfo.picture.medium} alt="" />
          <h4>Name : {allInfo.name.title + allInfo.name.first}</h4>
          <p>Email : {allInfo.email}</p>
          <p>City : {allInfo.location.city}</p>
          <button className='callBtn'>
          <box-icon type='solid' name='phone-call'></box-icon> {allInfo.cell}
          </button>
        </div>
    )
};

export default ReadUser;