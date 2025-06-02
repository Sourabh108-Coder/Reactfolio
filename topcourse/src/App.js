import './App.css';

import Navbar from './components/Navbar'
import Filter from './components/Filter'
import Cards from './components/Cards'
import { filterData } from './data';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

function App() {

  const[fetchdata,setfetchdata]=useState([])

  const[category,setcategory]=useState(filterData[0].title)

  const ApiData= async()=>{

    try {

      const fetching=await fetch(process.env.REACT_APP_API_APIURL)
      
      const format=  await fetching.json();

      setfetchdata(format.data)


    } catch (error) {
      toast.error("Error Occured");
      console.log(error)
    }
  }

  useEffect(()=>{
    ApiData()
  },[])


  return (
    <div className="App">

      <div className='nav-data'>
      <Navbar></Navbar>
      </div>

      <div className='filt-data'>
      <Filter filterData={filterData} setcategory={setcategory}></Filter>
      </div>
      
      <Cards fetchdata={fetchdata} category={category}></Cards>
    </div>
  );
}

export default App;
