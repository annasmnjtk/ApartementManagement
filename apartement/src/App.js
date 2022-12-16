import logo from "./logo.svg";
import "./App.css";
import ResidentPage from "./master/residents/ResidentPage";
import { Provider } from "react-redux";
import MainStore from "./store";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Provider store={MainStore}>
      <Container fluid>
        <ResidentPage />
      </Container>
    </Provider>
  );
}

export default App;
