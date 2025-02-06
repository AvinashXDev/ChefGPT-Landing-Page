import React from "react";
import Form from "../components/Form";
import List from "../components/List";
import Recipe from "../components/Recipe";
import GenerateBtn from "../components/GenerateBtn";
import { getRecipeFromMistral } from "../../../ai";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [recipe, setRecipe] = React.useState("");
  const loaderRef = React.useRef(null); // Reference to scroll to the loader


  async function ToggleGetRecipe() {
    setLoading(true);
    setTimeout(() => {
      loaderRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100); // Small delay for better UX

    try {
      const recipeMarkdown = await getRecipeFromMistral(ingredients);
      setRecipe(recipeMarkdown);
    } catch {
      setRecipe("Sorry, we couldn't generate a recipe at this time.");
    } finally {
      setLoading(false);
    }
  }
  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
    console.log(newIngredient);
  }

  return (
    <main>
      <Form handleAction={addIngredient} />
      <List item={ingredients} />
      <GenerateBtn item={ingredients} handleClick={ToggleGetRecipe} loading={loading} lodref={loaderRef} />
      <Recipe recipeData={recipe} item={ingredients} loading={loading} />
    </main>
  );
}
