import React  from "react";
// import { FcLike } from "react-icons/fc";
function Card(props){
    const newdata = props.coursedata;
    
    return(
        <div className="w-[300px] bg-gray-600 rounded-lg overflow-hidden">
         <div className="relative">
           <img className="" src={newdata.image.url} alt="" />
         </div>
         <div className="p-4">
            <p className="text-white font-semibold text-lg">{newdata.title}</p>
            <p className="text-white mt-2">{newdata.description}</p>
         </div>
        </div>
    )
}
export default Card;