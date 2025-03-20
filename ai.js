export async function getRecipeFromMistral(ingredientsArr) {
  const apiKey = import.meta.env.VITE_HF_ACCESS_TOKEN;
  const ingredientsString = ingredientsArr.join(", ");

  if (!apiKey) {
    console.error("Hugging Face API key is missing!");
    return "Error: Missing API Key";
  }

  try {
    console.log("Calling Hugging Face API...");

    const response = await fetch(
      "https://api-inference.huggingface.co/models/mistralai/Mixtral-8x7B-Instruct-v0.1",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
          parameters: { max_tokens: 1024 },
        }),
      }
    );

    const result = await response.json();
    console.log("Raw API Response:", result);

    // ✅ Extract the generated text
    if (Array.isArray(result) && result.length > 0 && result[0].generated_text) {
      return result[0].generated_text;
    } else {
      throw new Error("Invalid API response format.");
    }
  } catch (err) {
    console.error("Error fetching recipe:", err.message);
    return "Sorry, I couldn't generate a recipe at this time.";
  }
}
