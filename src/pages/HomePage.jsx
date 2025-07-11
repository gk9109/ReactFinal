import React from 'react'
import SearchBar from '../componenets/SearchBar';
import ResultsList from '../componenets/ResultsList'; 
import { useState } from 'react';

export default function HomePage() {

  const [results, setResults] = useState([]);


  return (
    // passing down results, setResults
    <div className='container'>
        <SearchBar setResults={setResults}/>
        <ResultsList results={results}/>
    </div>
  )
}
