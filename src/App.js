import Data from "./Components/Data.json";
import Head from "./Components/Head";
import Tablebody from "./Components/Tablebody";

function App() {
  return (
    <div className="container">
      <Head />

      <Tablebody Data={Data} />
    </div>
  );
}

export default App;
