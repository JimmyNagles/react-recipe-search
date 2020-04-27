import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group ">
        <label  htmlFor="search"></label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          
          id="search"
        />
       
        <a onClick={props.handleFormSubmit} className="btn-flat right waves-effect waves-teal">
          Search
        </a>
        <br/>
        <br />
      </div>
    </form>
  );
}

export default SearchForm;
