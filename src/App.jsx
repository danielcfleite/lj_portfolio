import { Nav } from "./Components/Nav";
import { Container, GlobalStyle } from "./global";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Nav />
        <Outlet />
      </Container>
    </>
  );
}

export default App;
