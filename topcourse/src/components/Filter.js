import React from 'react'

const Filter = (props) => {

  let setcategory=props.setcategory;

  const filterData=props.filterData;

  function filterHandler(titletit){

    setcategory(titletit)
  }
  return (
    <div className='actual-buttons'>
        {
            filterData.map((data)=>{
                return <button onClick={()=>filterHandler(data.title)} className='single-button' key={data.id}>{data.title}</button>
            })
        }
    </div>
  )
}

export default Filter
