import { Routes, Route } from "react-router-dom";
import Cover from "./component/cover";
import ErrorPage from "./component/error";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/:id" element={<Cover />} />
        <Route path="*" element={<ErrorPage />} />
        {/* Rute dengan parameter */}
      </Routes>
    </div>
  );
}

export default App;
