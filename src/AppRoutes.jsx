import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import EnigmaPage from "./pages/enigma_page.jsx";
import PoemaPage from "./pages/poema_page.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import { UserProvider } from './components/UserContext.jsx';

const AppRoutes = () => {
  return (
    <Router>
      <UserProvider>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="*" element={<Navigate to="/" />} />
        <Route exact path="/enigma/1" element={<EnigmaPage />} />
        <Route exact path="/enigma/2" element={<PoemaPage />} />
      </Routes>
      </UserProvider>
    </Router>
  );
};

export default AppRoutes;
