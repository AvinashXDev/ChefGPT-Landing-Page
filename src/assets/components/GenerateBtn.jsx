export default function GenerateBtn(props) {
  // Loader.js
  const Loader = () => (
    <div className="loader">
      <div className="spinner"></div>
    </div>
  );
  const messages = [
    "🍲 Swad ka intezar ho raha hai... Generating your tasty veg recipe!",
    "👨‍🍳 Masale mix ho rahe hain... Aapki perfect vegetarian recipe ready ho rahi hai!",
    "🥘 Bas thoda patience, ek zabardast veg dish aa rahi hai!",
    "🍛 Chulha garam ho raha hai... Tasty vegetarian recipe loading!",
    "🌶️ Flavors ka tadka lag raha hai... Swadisht veg recipe on the way!",
    "🥄 Ek chammach wait, ek lajawab vegetarian recipe aa rahi hai!",
    "🍽️ Bhook lagi? Bas thoda intezar, ek mazedar vegetarian recipe aa rahi hai!",
    "🫕 Perfect combination of taste and masala... Veg recipe tayar ho rahi hai!",
    "🔥 Spices ka magic ho raha hai shuru... Swadisht vegetarian recipe on the way!",
    "🍜 Kadai chadh gayi, ab bas ingredients mil rahe hain... Veg recipe loading!",
    "🍲 I am creating your vegetarian recipe, please wait...",
    "🥦 Sabzi ka swad aa raha hai... Aapki veg recipe tayar ho rahi hai!",
    "🍚 Tasty rice ke saath, swad ka explosion hone wala hai!",
    "🥢 Swad se bharpoor, aapke liye perfect vegetarian recipe ban rahi hai!",
    "🍅 Fresh vegetables ka swad aa gaya hai, bas thodi der!",
    "🍆 Brinjal ke swad ka tadka lag raha hai, vegetarian dish ready ho rahi hai!",
    "🌾 Grains and vegetables ka combination, amazing recipe loading!",
    "🥄 Ek aur chammach masala, bas vegetarian recipe ready hogi!",
    "🍪 Khaas ingredients mil rahe hain, wait karen!",
    "🌽 Makkai aur masale ka perfect combination, veg recipe on the way!"
  ];
  
  const getRandomMessage = () => messages[Math.floor(Math.random() * messages.length)];


  return (
    <>
      {props.item.length > 3 && (
        <section>
          <div className="get-recipe-container">
            <div>
              <h3>Ready for a recipe?</h3>
              <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <button onClick={props.handleClick}>
              {props.loading ? "Generating..." : "Get a recipe"}
            </button>
          </div>
        </section>
      )}
      {props.loading && (
        <>
          {" "}
          <p className="loader" ref={props.lodref}>
            {getRandomMessage()}
          </p>
          <h1>{Loader()}</h1>
        </>
      )}
    </>
  );
}
