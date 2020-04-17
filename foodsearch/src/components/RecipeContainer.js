import React, { useState, useEffect } from "react";
import {Col, Container,Row,Icon} from "react-materialize";
import Card from "./Card";
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
     <div>

       <Container>
         <Row> 

         <Col l={12} >
            <Card  heading={<Icon className="center large brown-text text-darken-4">search</Icon>}>
              <SearchForm
                value={search}
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
              />
            </Card>
          </Col> 
          </Row>

          <Row>
          <Col l={12} >
            <Card
              heading={result.recipe || "Search for a recepie to begin"}> </Card>
       </Col>

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
