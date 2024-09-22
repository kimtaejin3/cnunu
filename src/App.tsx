import { BrowserRouter, Route, Routes } from "react-router-dom";

import { COLORS } from "./constants";
import Layout from "./layout";
import Cafeteria from "./pages/Cafeteria";
import Main from "./pages/Main";
import Background from "./styles/Background";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route element={<Background color={COLORS.grayscale100} />}>
            <Route path="/" element={<Main />} />
          </Route>
          <Route element={<Background color={COLORS.grayscale200} />}>
            <Route path="/cafeteria" element={<Cafeteria />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
