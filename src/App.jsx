
import { useState } from 'react'
import Watch from './Compontent/Watch/Watch'
import { useEffect } from 'react';

function App() {
  const [watchs,setWatchs] =useState([]);
  // useEffect(() =>{
  //   fetch('Watchs.json')
  //   .then(res => res.json())
  //   .then(data => setWatchs(data))
  // },[])
  useEffect(() =>{
    fetch('https://raw.githubusercontent.com/TanzidAnan/retro-forum/refs/heads/main/watchs.json')
    .then(res => res.json())
    .then(data => setWatchs(data))
  },[])
  // const watchs =[
  //   {id:1, name:'apple Watch', Price:200},
  //   {id:2, name:'sumsum Watch', Price:300},
  //   {id:1, name:'vivo Watch', Price:100},
  //   {id:1, name:'mi Watch', Price:250},
  //   {id:1, name:'oppo Watch', Price:150},
  // ]
  // const watch =[
  //   {
  //     "id": 1,
  //     "name": "Apple Watch Series 9",
  //     "price": 399,
  //     "img": "https://example.com/images/apple-watch-series-9.jpg"
  //   },
  //   {
  //     "id": 2,
  //     "name": "Samsung Galaxy Watch 6",
  //     "price": 299,
  //     "img": "https://example.com/images/samsung-galaxy-watch-6.jpg"
  //   },
  //   {
  //     "id": 3,
  //     "name": "Garmin Fenix 7",
  //     "price": 699,
  //     "img": "https://example.com/images/garmin-fenix-7.jpg"
  //   },
  //   {
  //     "id": 4,
  //     "name": "Fitbit Sense 2",
  //     "price": 229,
  //     "img": "https://example.com/images/fitbit-sense-2.jpg"
  //   },
  //   {
  //     "id": 5,
  //     "name": "Amazfit GTR 4",
  //     "price": 199,
  //     "img": "https://example.com/images/amazfit-gtr-4.jpg"
  //   }
  // ]
  


  return (
    <>
      {
        watchs.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
      }
    </>
  )
}

export default App
