import React from 'react'

const EmpCard = ({info}) => {
    console.log('info', info);
  return (
    <div className='emp-card'>
      <div><img className='emp-card__img' src={`${info.imageUrl}`} /></div>
      <div className='emp-card__text'>NAME: {info.firstName+" "+info.lastName}</div>
      <div className='emp-card__text'>SALARY:{info.salary}</div>
      <div className='emp-card__text'>CONTACT.NO: {info.contactNumber}</div>
      <div className='emp-card__text'>DOB: {info.dob}</div>
    </div>
  )
}

export default EmpCard
