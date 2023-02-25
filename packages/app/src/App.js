import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

import "./app.css";

const Home = () => {
  const HomePage = React.lazy(() => import("HomeApp/HomePage"));

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <HomePage />
      </Suspense>
    </div>
  );
};

const Contact = () => {
  const ContactPage = React.lazy(() => import("ContactApp/ContactPage"));

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ContactPage />
      </Suspense>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <Navbar color="light" light expand="md">
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/contact">Contact</Link>
            </NavItem>
          </Nav>
        </Navbar>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
