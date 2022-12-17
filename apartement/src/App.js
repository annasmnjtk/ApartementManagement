import "./App.css";
import { Container } from "react-bootstrap";
import LoginPage from "./login/LoginPage";
import { Provider } from "react-redux";
import MainStore from "./store";

function App() {
  return (
    <Container>
      <Provider store={MainStore}>
        <LoginPage />
      </Provider>
    </Container>
  );
}

export default App;
