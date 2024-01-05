import { Route, Routes, BrowserRouter } from "react-router-dom";
import Platform from "./pages/private/platform/Platform";

interface AppProps {}

const App: React.FunctionComponent<AppProps> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Platform />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
