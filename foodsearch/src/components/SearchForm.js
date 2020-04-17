import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group brown darken-4">
        <label  htmlFor="search"></label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          
          id="search"
        />
       
        <a onClick={props.handleFormSubmit} className="btn  brown black-text waves-effect waves-teal">
          Search
        </a>
        <br/>
        <br />
      </div>
    </form>
  );
}

export default SearchForm;
