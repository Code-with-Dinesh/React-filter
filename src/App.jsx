import React, { useEffect, useState } from "react"
import {filterData,apiUrl} from "./data.jsx"
import Cards from "./assets/Components/Cards.jsx"
import Filter from "./assets/Components/Filter.jsx"
import Navbar from "./assets/Components/Navbar.jsx"
import Loader from "./assets/Components/Loader.jsx"
import {toast} from "react-toastify"
function App() {
  const [loading,setloading] = useState(true)
  const [course,setcourse] =  useState(null)
  const [category,setcategory] =  useState(filterData[0].title)
  
  async function fetchData(){
    try{
        let res = await fetch(apiUrl)
        let output =  await res.json();
        setcourse(output.data)
    }catch(err){
        toast.error("Network Problem")
    }finally{

      setloading(false)
    }
  }

 useEffect(()=>{
  fetchData();
 },[])

  return(
      <div className="flex flex-col min-h-screen bg-slate-400">
        <div>
        <Navbar/>
        </div>
        <div className=""> 
        <div className="">
         <Filter category={category} setcategory={setcategory} filterData={filterData}  />
        </div>
        <div className=" w-11/12 flex-wrap max-w-[1200px] mx-auto flex items-center justify-center min-h-[50vh]">
          {loading? <Loader/>: <Cards category={category} courses={course}/>}   
        </div>
        </div>
       
      </div>
  )
}

export default App
