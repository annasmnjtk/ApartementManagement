import logo from "./logo.svg";
import "./App.css";
import { Container } from "react-bootstrap";
import LoginPage from "./page/login/LoginPage";
import { Provider } from "react-redux";
import MainStore from "./store";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import UnitPage from "./page/master/units/UnitPage";

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
            <Route path="/residence" element={<></>}>
              <Route path="list" element={<></>}></Route>
              <Route path="form" element={<></>}></Route>
              <Route path="form/:id" element={<></>}></Route>
            </Route>
            <Route path="/unit" element={<UnitPage></UnitPage>}>
              <Route path="list" element={<></>}></Route>
              <Route path="form" element={<></>}></Route>
              <Route path="form/:id" element={<></>}></Route>
            </Route>
          </Routes>
        </Provider>
      </Container>
    </BrowserRouter>
  );
}

export default App;
