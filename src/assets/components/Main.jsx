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
  const loaderRef = React.useRef(null);

  async function ToggleGetRecipe() {
    setLoading(true);
    setTimeout(() => {
      loaderRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);

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
  }

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <Form handleAction={addIngredient} />
        <List item={ingredients} />
        <GenerateBtn item={ingredients} handleClick={ToggleGetRecipe} loading={loading} lodref={loaderRef} />
        <div ref={loaderRef}>
          <Recipe item={ingredients} recipeData={recipe} loading={loading} />
        </div>
      </div>
    </main>
  );
}
