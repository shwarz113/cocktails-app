import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Navigation} from "./modules/navigation";
import ContentPage from "./pages/ContentPage";
import NotFoundPage from "./pages/NotFoundPage";
import {Template} from "./template";

function App() {
  return (
    <Router>
      <Template>
        <Navigation />
        <Routes>
          <Route path="/" Component={ContentPage} />
          <Route path="/404" Component={NotFoundPage} />
          <Route path="/:id" Component={ContentPage} />
        </Routes>
      </Template>
    </Router>
  );
}

export default App;
