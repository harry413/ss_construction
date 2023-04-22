import React from 'react'

import './people.css';
import  Pic  from '../../assets/sss.jpeg';
import  Pica  from '../../assets/lakhan.jpeg';
import  Picb  from '../../assets/lakhan1.jpeg';
const People = () => {
  return (
    <>
      <div className='ss_people'>
          <div className='ss_people_head'>
            <h1>Meet our leaders</h1>
          </div>
        <div className='ss_people_all' p-20>
            <div className='ss_people_intro'>
              <div className='ss_people_inner'>
                      <img src={ Pic } alt='people'/>
                    <h5>MR.Santosh patidar</h5> 
                    <p> founder of ss construction </p>
               </div>
            </div> 
            <div className='ss_people_intro'>
              <div className='ss_people_inner'>
                      <img src={ Pica } alt='pe'/>
                    <h5>MR.Lakhan patidar</h5> 
                    <p> co-founder of ss construction </p>
               </div>
            </div>
            <div className='ss_people_intro'>
              <div className='ss_people_inner'>
                      <img src={ Picb } alt='p'/>
                    <h5>MR.sachin patidar</h5> 
                    <p>  co-founder of ss construction </p>
               </div>
            </div> 
         </div>
      </div>
    </>
  )
}

export default People