import "./App.css";
import {SideNavBar} from "./components/molecules";
import {TopNavBar} from "./components/molecules";
import MainPage from "./components/organisms/MainPage/MainPage";


function App() {
  

  return (
    <div className="App">
      <SideNavBar />
      <TopNavBar />
      <MainPage/>
    </div>
  );
}

export default App;
