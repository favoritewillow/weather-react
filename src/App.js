import Forecast from "./Forecast";
import Footer from "./Footer";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-forecast">
          <Forecast defaultCity="Kyiv" />

          <Footer />
        </div>
      </div>
    </div>
  );
}
