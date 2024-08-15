import "./App.css";
import FlexForm from "./Forms/flexForm";
import Forms from "./Forms/forms";
import MagazinePage from "./Magazine-Page/MagazinePage";
import NavigationBar from "./NavigationBar/NavigationBar";
import Table from "./Tables/tables";

function App() {
  return (
    <div className="App">
      {/* Challenge 1 Done Responsive Nav Bar */}
      {/* <NavigationBar />   */}
      <MagazinePage />
      {/* <Forms />
      <FlexForm /> */}
      {/* <Table /> */}
    </div>
  );
}

export default App;
