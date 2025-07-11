import React, { useState, useEffect } from 'react';

export default function SearchBar({ setResults }) {
  const [query, setQuery] = useState('');
  const [company, setCompany] = useState(''); 
  const [allResults, setAllResults] = useState([]);

  const handleSub = (e) => {
    e.preventDefault();
    if(!company){
      alert("please enter a company name.");
      return;
    }
    doApi();
  };

  const doApi = async () => {
    const url = `https://randomuser.me/api/?results=10&seed=${company}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      // const filtered = data.results.filter(user =>
      //   user.name.first.toLowerCase().includes(query.toLowerCase())
      // );
      setResults(data.results);
      setAllResults(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const filtered = allResults.filter(user =>
      `${user.name.first} ${user.name.last}`.toLowerCase().startsWith(query.toLowerCase())
    );
    setResults(filtered);
  }, [query, allResults]);

  return (
    <form
      onSubmit={handleSub}
      className='mt-3 mb-3 mx-auto d-flex flex-column align-items-center'
    >
      <input
        className='mb-1 form-control border-primary'
        type='text'
        placeholder='Company name (required)'
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <input
        className='mb-1 form-control border-primary'
        type='text'
        placeholder='Search employee by name'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className='btn btn-primary mt-2 '>Search</button>
    </form>
  );
}
