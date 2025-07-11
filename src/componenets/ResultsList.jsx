import React, { useState } from 'react'
import EmployeeCard from './EmployeeCard'

export default function ResultsList({ results }) {

    
    //returns a list of results by search 

  return (
    <div className='card p-4 shadow'>
        
        {results.map((item, i) => {
            return (
                <EmployeeCard key={i} item={item}/>                    
            )
        })}
            
        
    </div>
  )
}
