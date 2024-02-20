import { Nav } from "./Components/Nav";
import { PhotosGrid } from "./Components/PhotoGrid";
import { Container, GlobalStyle } from "./global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Nav />
        <PhotosGrid />
      </Container>
    </>
  );
}

export default App;
