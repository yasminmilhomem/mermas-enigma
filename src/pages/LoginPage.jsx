import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserByUsername, createUser } from "../services/userService.ts";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [isNewUser, setIsNewUser] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await getUserByUsername(username);
      if (user) {
        navigate(`/enigma/${user.enigma}`);
      } else {
        setError(
          "Usuário não encontrado. Por favor, verifique o nome de usuário."
        );
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Erro ao fazer login. Por favor, tente novamente.");
    }
  };

  const handleSignup = async () => {
    try {
      await createUser(username);
      console.log("Usuário criado com sucesso!", username);
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      alert("Erro ao criar usuário. Por favor, tente novamente.");
    }
  };

  return (
    <div>
      <h1>{isNewUser ? "Criar Conta" : "Login"}</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {isNewUser ? (
        <form onSubmit={handleSignup}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <button type="submit">Criar Conta</button>
        </form>
      ) : (
        <form onSubmit={handleLogin}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <button type="submit">Entrar</button>
        </form>
      )}
      <button onClick={() => setIsNewUser(!isNewUser)}>
        {isNewUser ? "Voltar para Login" : "Criar Nova Conta"}
      </button>
    </div>
  );
};

export default LoginPage;
