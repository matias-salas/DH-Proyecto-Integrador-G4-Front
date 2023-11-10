import Layout from "./components/layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes/routes";
import PanelAdmin from "./components/pages/PanelAdmin/PanelAdmin";


function App() {
  return (
    
    <BrowserRouter>
    
        <Routes>
          <Route path="/panelAdmin" element={<PanelAdmin />}>

          </Route>
          <Route element={<Layout />}>
            {routes.map(({ id, path, Element }) => (
              <Route key={id} path={path} element={<Element />} />
            ))}
          </Route>
          <Route path="*" element={<h1>404 not found</h1>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;