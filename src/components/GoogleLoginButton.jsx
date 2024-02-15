// GoogleLoginButton.jsx
import { GoogleLogin } from "react-google-login";

import PropTypes from "prop-types";

const GoogleLoginButton = ({ onSuccess, onFailure }) => {
  const CLIENT_ID =
    "257115614554-hfb2koia391o19k15rc5e81vrs7jfg13.apps.googleusercontent.com"

  return (
    <GoogleLogin
      clientId={CLIENT_ID}
      buttonText="Faça o login com sua conta Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={"single_host_origin"}
    />
  );
};

GoogleLoginButton.propTypes = {
  onSuccess: PropTypes.func.isRequired,
  onFailure: PropTypes.func.isRequired,
};

export default GoogleLoginButton;
