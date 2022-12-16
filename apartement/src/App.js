import logo from "./logo.svg";
import "./App.css";
import { Container } from "react-bootstrap";
import LoginPage from "./page/login/LoginPage";
import { Provider } from "react-redux";
import MainStore from "./store";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";

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
          </Routes>
        </Provider>
      </Container>
    </BrowserRouter>
  );
}

export default App;
