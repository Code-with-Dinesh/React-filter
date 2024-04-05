import React from "react";
import Card from "./Card.jsx"
function Cards(props){
    let courses = props.courses;
    let category = props.category
     let allcourses = []
     function getcourse(){
        if(category == "All"){
            Object.values(courses).forEach(arr =>{
                arr.forEach(data =>{
                    allcourses.push(data) 
                })
            })
            return allcourses;
        }
        else{
            // specific array pass
            return courses[category]
        }
      
     }
    return(
        <div className="flex flex-wrap justify-center gap-4 mb-4">
           {
            getcourse().map((courses)=>(
                <Card key={courses.id} coursedata={courses} />
            ))
           }
        </div>
    )
}

export default Cards;