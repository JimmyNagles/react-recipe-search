import React, { useState, useEffect } from "react";
import { Col, Container, Row, Icon, Card } from "react-materialize";

import Fone from "./video/Fone.mp4";
import SearchForm from "./SearchForm";
import RecipeCard from "./RecipeCard";
import API from "../utils/API";
import Background from "./Background";
import CardHome from "./CardHome";
const RecipeContainer = () => {
  const [result, setResult] = useState({});
  const [search, setSearch] = useState("");

  const SearchFood = (query) => {
    API.search(query)
      .then((res) => setResult(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    SearchFood("");
  }, []);

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    SearchFood(search);
    setSearch("");
  };

  return (
    <div>
      <Background>
    
      </Background>
      <CardHome>
      <Card
          className="transparent "
          title={
            <div className=" center">
              {result.recipe || "Search For recipes To Start"}
              <Icon className="center medium left ">search </Icon>
            </div>
          }
        >
          <SearchForm
            value={search}
            handleInputChange={handleInputChange}
            handleFormSubmit={handleFormSubmit}
          />
        </Card>

      </CardHome>
      <Container>
        <Row>
          {result.recipes &&
            result.recipes.map((recipe) => (
              <RecipeCard
                image={recipe.image}
                key={recipe.id}
                title={recipe.title}
                link={recipe.sourceUrl}
              ></RecipeCard>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default RecipeContainer;
