import Header from "./Header";
import Forecast from "./Forecast";
import Footer from "./Footer";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-forecast">
          <Header defaultCity="Kyiv" />

          <Forecast defaultCity="Kyiv" />

          <Footer />
        </div>
      </div>
    </div>
  );
}
