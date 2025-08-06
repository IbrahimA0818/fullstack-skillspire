
function listrenderer() {
  const foods = ["banana", "apple", "peach"];

  return (
    <div className="App">
        <h2>fruit list</h2>
    <ul>
      {foods.map((food, index) => (
        <li key={index}>
          <h2>Food Name: {food}</h2>
        </li>
      ))}
    </ul>
    </div>
  );
}

export default listrenderer;
