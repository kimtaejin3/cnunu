import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./layout";
import Main from "./pages/Main";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
