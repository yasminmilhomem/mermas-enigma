import { useEffect, useState } from "react";
import { getUserDataByUsername } from "../services/userService.ts";
import propTypes from "prop-types";

const UserProfile = ({ username }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = await getUserDataByUsername(username);
      if (userData) {
        setUserData(userData);
      }
      setLoading(false);
    };

    fetchUserData();
  }, [username]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!userData) {
    return <div>Usuário não encontrado</div>;
  }

  return (
    <div>
      <h2>Username: {userData.username}</h2>
      <p>Pontuação: {userData.score}</p>
      <img
        src={`path/to/user-photos/${userData.photoNumber}.jpg`}
        alt="Foto do usuário"
      />
    </div>
  );
};

export default UserProfile;

UserProfile.propTypes = {
  username: propTypes.string,
};
