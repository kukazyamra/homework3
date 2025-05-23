function Greeting({ name }) {
  console.log("Рендер Greeting");
  return (
    <div className="greeting">
      <p>Привет, {name}</p>
    </div>
  );
}

export default Greeting;
