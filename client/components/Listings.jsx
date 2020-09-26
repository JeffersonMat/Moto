import React from 'react';

import data from '../data'

import Places from './card/card'





export default function Listings({city, guest, startDate, endDate}) {

  // Filter function goes here

  let results = [];

  React.useEffect(() => {
    results = data.filter(space => space.city === city);
    console.log(results);
  });


  return (
    <>
      {results.map(content => { return <h1>{content.city}</h1>, console.log(content, "contetn");})}
    </>
  )
}