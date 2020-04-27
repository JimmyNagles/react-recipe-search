import React from "react";




function RecipeCard(props) {
    return (
   
      <div className="col s6 m3 l4">
       <div className="card brown darken-4 ">
        <div className=" card-image grey darken-4" >
        
        <img className="circle " width="200" height="200"  src={props.image}>
        </img>
        
        <span className="card-title red-text darken-4" >{props.title},{props.id}</span>
        </div>
  
     
        <div className="card-action">
         <a href={props.link}>recipe here</a>
          

        </div>


      </div>
      </div>
   
  
    );
  }
  
  export default RecipeCard;
  