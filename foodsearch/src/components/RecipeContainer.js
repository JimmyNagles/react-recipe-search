import React, { useState, useEffect } from "react";
import {Col, Container,Row,Icon,Card} from "react-materialize";

import Fone from './video/Fone.mp4'
import SearchForm from "./SearchForm";
import RecipeCard from "./RecipeCard";
import API from "../utils/API";


const RecipeContainer = () => {
  const [result, setResult] = useState({});
  const [search, setSearch] = useState('');
  
  
  
  const SearchFood = query => {
    API.search(query)
      .then(res => setResult(res.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    SearchFood("");
  }, [])


  const handleInputChange = event => {
    setSearch(event.target.value)
  }

  const handleFormSubmit = event => {
    event.preventDefault();
    SearchFood(search);
    setSearch('');
  }




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



       <Container>
         <Row> 

         <Col l={12} >
            <Card  className="transparent "
            
            title={
              <div className=" center">
                    {result.recipe || "Search For a Recepie To Start"}
                <Icon className="center medium left ">search   </Icon> 

              </div>
              }>

              <SearchForm
                value={search}
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
              />
            </Card>
          </Col> 
          </Row>

          <Row>
       

       {console.log('result', result)}

       {result.recipes && result.recipes.map(recipe=>
    
    

    <RecipeCard
    image={recipe.image}
    key={recipe.id}
    title={recipe.title}
    link={recipe.sourceUrl}>
    
      
    </RecipeCard>
    
    )}
           
  
           
        

      
        

          </Row>
          </Container>

          </div>  
    );
}

export default RecipeContainer;
