import React from "react";

export default function Form(props){
    
   
    return(
        <form action={props.handleAction} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
          required
        />
        <button>Add ingredient</button>
      </form>
    )
}