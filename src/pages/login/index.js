import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import {Row, Col} from "antd";
import "firebase/auth";
import firebase from "firebase/app";

import "./firebaseui-styling.global.css";
import styles from "./login.module.css";

const uiConfig = {
  signInFlow: "popup",
  signInSuccessUrl: "/home",
  signInOptions: [firebase.auth.PhoneAuthProvider.PROVIDER_ID],
};

export default function Login() {
  // const [isLogin, setIsLogin] = useState(false);

  return (
    <div style={{padding: "20px"}}>
      <Row justify="center" align="middle" style={{height: "100vh"}}>
        <Col>
          <StyledFirebaseAuth
            className={styles.firebaseUi}
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </Col>
      </Row>
    </div>
  );
}
