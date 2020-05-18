import React from "react";
import Fone from './video/Fone.mp4'




function Background(props) {
    return (
   
      <div >
   

   <video autoPlay loop muted
        
        style={{
            position:"absolute",
            width:"100%",
            left:"50%",  
            top:"50%",
            height:"100%",
            objectFit:"cover",
            transform:"translate(-50%,-50%)",
            zIndex:"-1"
        }}>



        
          <source src={Fone} type="video/mp4"></source>


          
        </video>


        <div 
         style={{
            position:"absolute",
            left:"50%",  
            top:"50%",
            transform:"translate(-50%,-50%)",
          
      }}
        
        >{props.children}</div>

      </div>
   
  
    );
  }
  
  export default Background;
  