import logo from './logo.svg';
import './App.css';
import AboutUsPage from "./components/aboutUs/AboutUs";
import PortfolioPage from "./components/porfolioPage/PorfolioPage";
import ContactPage from "./components/contactsPage/ContactsPage";

function App() {
  return (
    <div className="App">
        <AboutUsPage/>
        <PortfolioPage/>
        <ContactPage/>
    </div>
  );
}

export default App;
