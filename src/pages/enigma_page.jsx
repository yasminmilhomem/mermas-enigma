import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserProfile from "../components/UserProfile.jsx";
import { useUser } from "../components/UserContext.jsx";
import "../styles/enigma_page.css";

function EnigmaPage() {
  const [theme, setTheme] = useState("light");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { username } = useUser();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password.toLowerCase().trim() === "poema") {
      // change to route "/poema"
      return navigate("/poema");
    } else {
      alert("Senha incorreta. Tente novamente.");
    }
  };

  return (
    <div className={theme === "light" ? "light-theme" : "dark-theme"}>
      <header>
        <h1>Mermãs Digitais: O Enigma</h1>
        <UserProfile username={username} />
        <h4>
          Tá preparada pra resolver esses mistérios e alcançar a vitória final?
        </h4>
        <h2>Esse tema claro incomoda bastante, não acha?</h2>
      </header>
      <main>
        <form id="password-form" onSubmit={handleSubmit}>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Confirmar</button>
        </form>
        {theme === "dark" && <h2 id="poema">Palavra chave: poema</h2>}
      </main>

      <button onClick={toggleTheme}>Alterar Tema</button>
    </div>
  );
}

export default EnigmaPage;
