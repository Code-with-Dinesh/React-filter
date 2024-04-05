import React from "react";

function Filter(props){
    let filterdata = props.filterData
    let setcategory = props.setcategory
    let category =  props.category

    function clickHandler(title){
      setcategory(title)
    }
    return(
        <div className="flex items-center text-white justify-center  gap-5 mt-4 text-lg p-4">
          {filterdata.map((data)=>(
            <button onClick={()=>clickHandler(data.title)} className="bg-black px-3 py-1 rounded-lg" key={data.id}>{data.title}</button>
          ))}
        </div>
    )
}

export default Filter;