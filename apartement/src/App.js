import logo from "./logo.svg";
import "./App.css";
import { Container } from "react-bootstrap";
import LoginPage from "./page/login/LoginPage";
import { Provider } from "react-redux";
import MainStore from "./store";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import UnitPage from "./page/master/units/UnitPage";
import UnitForm from "./page/master/units/UnitForm";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Provider store={MainStore}>
          <Routes>
            <Route
              path="*"
              element={
                <>
                  <h1>Not Found</h1>
                </>
              }
            ></Route>
            <Route path="/" element={<LoginPage />}></Route>
            <Route path="/home" element={<HomePage />}></Route>
            <Route path="/unit" element={<UnitPage />}></Route>
            <Route path="/unit/form" element={<UnitForm />}></Route>
          </Routes>
        </Provider>
      </Container>
    </BrowserRouter>
  );
}

export default App;
