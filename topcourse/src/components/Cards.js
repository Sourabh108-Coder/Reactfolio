import React from 'react'

import Card from './Card';
import { useState } from 'react';

const Cards = (props) => {

    let fetchdata=props.fetchdata;

    let category=props.category;

    const[liked,setliked]=useState([]);


    function getcourses(){

        if(category==="All"){

            let arr=[];

           Object.values(fetchdata).forEach((coursearr)=>{
            coursearr.forEach((course)=>{
                arr.push(course)
            })
        })
        return arr;
        }

        else{

            return(fetchdata[category])
        }
    }
  return (
    <div className='cards-container'>
        {

            getcourses().map((coursedata)=>{
                return <Card coursedata={coursedata} liked={liked} setliked={setliked}></Card>
            })
        }
    </div>
  )
}

export default Cards
