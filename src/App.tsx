import { BrowserRouter, Route, Routes } from "react-router-dom";

import { COLORS } from "./constants";
import Layout from "./layout";
import Cafeteria from "./pages/Cafeteria";
import DepartmentNotification from "./pages/DepartmentNotification";
import FoodRecommendation from "./pages/FoodRecommendation";
import FoodReport from "./pages/FoodReport";
import Main from "./pages/Main";
import Background from "./styles/Background";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route element={<Background color={COLORS.white} />}>
            <Route
              path="/department-notification"
              element={<DepartmentNotification />}
            />
          </Route>
          <Route element={<Background color={COLORS.grayscale100} />}>
            <Route path="/" element={<Main />} />
            <Route
              path="/food-recommendation"
              element={<FoodRecommendation />}
            />
          </Route>
          <Route element={<Background color={COLORS.grayscale200} />}>
            <Route path="/cafeteria" element={<Cafeteria />} />
            <Route path="/food-report" element={<FoodReport />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
