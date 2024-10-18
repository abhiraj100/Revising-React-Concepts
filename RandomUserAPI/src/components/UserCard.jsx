import React from 'react'

const UserCard = (props) => {
    // console.log(props.data);
    
  return (
    <>
      <div className='user-card border-2 bg-gray-400 p-12 m-10'>
        <div className='p-1 m-8'>
            <img className='user-img' src={props.data.picture} />
        </div>
        <h2>{props.data.name.first + " " + props.data.name.last}</h2>
        <p>{props.data.location.city + ", " + props.data.location.state + ", " + props.data.location.country}</p>
      </div>
    </>
  )
}

export default UserCard;
