
import Sidebar from "./Components/Sidebar";
import styled from 'styled-components';


function App() {
  return (
    <div className="App">
      <Sidebar />
      <MainContentStyled>

      </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 25.3rem;
  min-height: 100vh;
  background-color: red;

`;

export default App;