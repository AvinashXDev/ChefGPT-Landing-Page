import ReactMarkdown from "react-markdown";

export default function Recipe(props) {
  const data = props.recipeData;

  return (
    <>
      {!props.loading && props.item.length > 3 && (
        <section className="suggested-recipe-container">
          <h2>ChefGPT Recommends:</h2>
          <article className="suggested-recipe-container" aria-live="polite">
            <ReactMarkdown children={data} />
          </article>
        </section>
      )}
    </>
  );
}
