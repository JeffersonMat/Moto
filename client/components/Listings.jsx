import React from 'react';

import data from '../data'

import Card from './card/Card'





export default function Listings({city, guest, startDate, endDate}) {

  // Filter function goes here

  let results = [];

  React.useEffect(() => {
    results = data.filter(space => space.city === city);
    console.log(results);
  })

  return (
    <>
      {results.map(content => <Card content={content} key={content.city}/>)}
    </>
  )
}