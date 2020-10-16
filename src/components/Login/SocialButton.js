import React from 'react'
import SocialLogin from 'react-social-login'
import Button from "components/CustomButtons/Button.js";

const SocialButton = (props) => {
  const { triggerLogin, children } = props;
  console.log(props);
  return (
    // <button onClick={triggerLogin} {...props}>
    //   {children}
    // </button>
    <Button color="primary" round onClick={triggerLogin}>
      {children}
    </Button>
  )
}

export default SocialLogin(SocialButton)