import {BrowserRouter, Route, Routes} from "react-router";
import ROUTES from "./ROUTES";
import Home from "./pages/Home.tsx";
import NotFound from "./pages/NotFound.tsx";

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path={ROUTES.HOME} element={<Home />}/>
            <Route path={ROUTES.NOT_FOUND} element={<NotFound />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
