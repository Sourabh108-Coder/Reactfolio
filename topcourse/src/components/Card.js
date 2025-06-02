import React from 'react'
import {FcLike , FcLikePlaceholder} from "react-icons/fc"

import { toast } from 'react-toastify';

const Card = (props) => {

   let coursedata=props.coursedata;
   let liked=props.liked;
   let setliked=props.setliked;

   let desc=coursedata.description.substring(0,200)+"....";


   function likedHandler(){

      if(liked.includes(coursedata.id)){
        setliked((prev)=>prev.filter((cid)=>(cid!==coursedata.id)))
        toast("Liked Removed")
      }

      else{
        if(liked.length==0){
            setliked([coursedata.id])
        }
        else{
            setliked((prev)=> [...prev , coursedata.id]);
        }

        toast("Liked SuccessFully")
      }
   }

  return (
    <div className='single-card'>
        <div className='img-icon'>
          <img className="img-data" src={coursedata.image.url} alt={coursedata.image.alt}></img>
        </div>

        <div className='likes'><button  className='liked-button' onClick={likedHandler}>{liked.includes(coursedata.id)? <FcLike className='same-class'/>:<FcLikePlaceholder className='same-class'/>}</button></div>


        <div className='para-head'>
            <h3>{coursedata.title}</h3>
            <p>{desc}</p>
        </div>
    </div>
  )
}

export default Card
