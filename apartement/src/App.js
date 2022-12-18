import logo from "./logo.svg";
import "./App.css";
import { Container } from "react-bootstrap";
import LoginPage from "./page/login/LoginPage";
import { Provider } from "react-redux";
import MainStore from "./store";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import ResidentPage from "./master/residents/ResidentPage";
import ResidentForm from "./master/residents/ResidentForm";
import ResidentTable from "./master/residents/ResidentTable";
import TransaksiPage from "./page/master/transaksi/TransaksiPage";
import UnitPage from "./page/master/units/UnitPage";
import UnitForm from "./page/master/units/UnitForm";
import TransaksiForm from "./page/master/transaksi/TransaksiForm";
import TransaksiList from "./page/master/transaksi/TransaksiList";

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
            <Route path="/residence" element={<ResidentPage />}>
              <Route path="" element={<ResidentTable />}></Route>
              <Route path="form" element={<ResidentForm />}></Route>
              <Route path="form/:id" element={<ResidentForm />}></Route>
            </Route>
            <Route path="/transaksi" element={<TransaksiPage />}>
              <Route path="" element={<TransaksiList />}></Route>
              <Route path="form" element={<TransaksiForm />}></Route>
              <Route path="form/:id" element={<TransaksiForm />}></Route>
            </Route>
            <Route path="/unit" element={<UnitPage />}></Route>
            <Route path="/unit/form" element={<UnitForm />}></Route>
          </Routes>
        </Provider>
      </Container>
    </BrowserRouter>
  );
}

export default App;
