import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import News from "./components/News";

function App() {

  const [selectedCountry, setSelectedCountry] = useState("in");

   // Function to handle country change
   const handleCountryChange = (newSelectedCountry) => {
    setSelectedCountry(newSelectedCountry);
  };

  let apiKey = process.env.REACT_APP_NEWS_API;
  let pageSize = 6;

  return (
    <div className="App">
      <Navigation selectedCountry={selectedCountry}
                  onCountryChange={handleCountryChange}/>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <News
              apiKey={apiKey}
              pageSize={pageSize}
              selectedCountry={selectedCountry}
              category="general"
            />
          }
        />
        <Route
          exact
          path="/business"
          element={
            <News
              apiKey={apiKey}
              pageSize={pageSize}
              selectedCountry={selectedCountry}
              category="business"
            />
          }
        />
        <Route
          exact
          path="/entertainment"
          element={
            <News
              apiKey={apiKey}
              pageSize={pageSize}
              selectedCountry={selectedCountry}
              category="entertainment"
            />
          }
        />
        <Route
          exact
          path="/health"
          element={
            <News
              apiKey={apiKey}
              pageSize={pageSize}
              selectedCountry={selectedCountry}
              category="health"
            />
          }
        />
        <Route
          exact
          path="/science"
          element={
            <News
              apiKey={apiKey}
              pageSize={pageSize}
              selectedCountry={selectedCountry}
              category="science"
            />
          }
        />
        <Route
          exact
          path="/sports"
          element={
            <News
              apiKey={apiKey}
              pageSize={pageSize}
              selectedCountry={selectedCountry}
              category="sports"
            />
          }
        />
        <Route
          exact
          path="/technology"
          element={
            <News
              apiKey={apiKey}
              pageSize={pageSize}
              selectedCountry={selectedCountry}
              category="technology"
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
