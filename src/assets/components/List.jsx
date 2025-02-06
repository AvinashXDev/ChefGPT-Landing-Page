export default function List(props) {
  const ingredientsListItems = props.item.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));
  const ItemLength = props.item.length;
  return (
    <>
      {ItemLength > 0 && (
        <section>
          <h2>Ingredients on hand:</h2>
          <ul className="ingredients-list" aria-live="polite">
            {ingredientsListItems}
          </ul>
        </section>
      )}
    </>
  );
}
