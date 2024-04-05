import React  from "react";
import "./Loader.css"
function Loader(){
    return(
        <div  className="flex items-center justify-center space-y-2 flex-col">
            <div className="spinner flex items-center justify-center"></div>
            <p className="text-lg font-semibold">Loading...</p>
        </div>
    )
}

export default Loader;