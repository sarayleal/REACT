import "./App.css";
import { Outlet } from "react-router-dom";
import BaseLayout from "./layout/BaseLayout";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import './index.css'

function App() {
  return (
    <div className="App">
      <BaseLayout>
        <Header />
        <Outlet />
        <Footer />
      </BaseLayout>
    </div>
  );
}

export default App;