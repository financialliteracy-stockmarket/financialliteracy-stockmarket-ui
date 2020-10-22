import React from 'react';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux'

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import SocialButton from "components/Login/SocialButton";

import loginService from 'services/LoginService'

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

const handleSocialLogin = (user) => {
  console.log(user)
}

const handleSocialLoginFailure = (err) => {
  console.error(err)
}

const onLoginFailure = (err) => {
  console.log(err);
}

const onLogoutSuccess = (user) => {
  console.log(user);
}

const onLogoutFailure = (err) => {
  console.log(err);
}

const setNodeRef = (provider, node) => {
  if (node) {
    this.nodes[provider] = node
  }
}

const SignIn = (props) => {
  console.log(props);
  const classes = useStyles();

  const guestLogin = () => {
    props.onLogin({
      userData: { name: 'Guest' }
    });
  }

  const onLoginSuccess = (user) => {
    loginService.doLogin({
      loginProvider: user._provider,
      loginPayload: user
    }).then(response => {
      console.log("Response Data", response);
      if (response.data) {
        props.onLogin(response.data);
      }
    }).catch(error => {
      console.error("Error while logging in", error);
    });
  }

  const loggedIn = props.auth.userData !== undefined;
  console.log("Logged In State", props, loggedIn);

  if (!loggedIn) {
    return (
      <div>
        <GridContainer justify={'center'}>
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="info">
                <h4 className={classes.cardTitleWhite}>Login</h4>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <CustomInput
                      labelText="Email / Mobile"
                      id="login-id"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: 'text'
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={12}>
                    <CustomInput
                      labelText="Password"
                      id="login-password"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: 'password'
                      }}
                    />
                  </GridItem>
                </GridContainer>
              </CardBody>
              <CardFooter>
                <Button color="secondary" onClick={guestLogin}>Guest Login</Button>
                <SocialButton
                  provider='google'
                  appId={process.env.REACT_APP_GOOGLE_APP_ID}
                  onLoginSuccess={onLoginSuccess}
                  onLoginFailure={onLoginFailure}
                  onLogoutSuccess={onLogoutSuccess}
                  onLogoutFailure={onLogoutFailure}
                  key={'google'}
                  scope={''}
                >
                  Login with Google
        </SocialButton>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    )
  } else {
    return <Redirect to='/admin/dashboard' />
  }
}


const mapStateToProps = state => ({ auth: { ...state.auth } });

const mapDispatchToProps = dispatch => ({
  onLogin: authData =>
    dispatch({ type: 'DO_LOGIN', authData }),
  onUnload: () =>
    dispatch({ type: 'DO_LOGOUT' })
});

// export default SignIn
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);