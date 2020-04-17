import React from "react";




function RecipeCard(props) {
    return (
   
      <div className="col s6 m3 l6">
       <div className="card brown darken-4 ">
        <div className=" card-image grey darken-4" >
        
        <img className="circle " width="200" height="200"  src={props.image}></img>
        
        </div>
  
        <div className="card-content brown white-text ">
          <ul>
        
            <li>
              {props.title}
            </li>
            <li>
               {props.id}
            </li>
         

      
          </ul>
        </div>
        <div className="card-action">
         <a href={props.link}>recipe here</a>
          

        </div>


      </div>
      </div>
   
  
    );
  }
  
  export default RecipeCard;
  