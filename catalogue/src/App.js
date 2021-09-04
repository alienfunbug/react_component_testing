import "./App.css";
import characterData from "./data/positons.json";

function App() {
  const currentPosition = "All-Stars";
  const nextPosition = "Centers";

  const testMap = characterData.map((n) => {
    if (n.position === nextPosition) {
      console.log("\n n.position IS")
      console.log(n.position)


      n.players.map((player) =>{
        console.log(player)
        console.log(player.name)
        console.log(player.Jersey)
        console.log(player.img)
      })
    }
  });

  return (
    <div className="App">
      {console.log("\n current position is ")}
      
      {console.log(currentPosition)}
  
   
      {console.log("\n full test map is")}
      {console.log(testMap)}
    </div>
  );
}

export default App;
