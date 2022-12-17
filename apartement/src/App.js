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
            <Route path="/units" element={<ResidentPage />}>
              <Route path="" element={<ResidentTable />}></Route>
              <Route path="form" element={<ResidentForm />}></Route>
              <Route path="form/:id" element={<ResidentForm />}></Route>
            </Route>
            <Route path="/residence" element={<ResidentPage />}>
              <Route path="" element={<ResidentTable />}></Route>
              <Route path="form" element={<ResidentForm />}></Route>
              <Route path="form/:id" element={<ResidentForm />}></Route>
            </Route>
            <Route path="/transaksi" element={<TransaksiPage />}>
              <Route path="" element={<ResidentTable />}></Route>
              <Route path="form" element={<ResidentForm />}></Route>
              <Route path="form/:id" element={<ResidentForm />}></Route>
            </Route>
          </Routes>
        </Provider>
      </Container>
    </BrowserRouter>
  );
}

export default App;
