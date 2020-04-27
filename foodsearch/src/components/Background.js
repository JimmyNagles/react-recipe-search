import React from "react";




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
        }}
        
        >
        
          <source src={Fone} type="video/mp4"></source>


          
        </video>

      </div>
   
  
    );
  }
  
  export default Background;
  