import { BrowserRouter, Route, Routes } from "react-router-dom";

import { COLORS } from "./constants";
import Layout from "./layout";
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
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
