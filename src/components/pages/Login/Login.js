import React from 'react';
import { Row, Col, FormGroup, Label, Input } from 'reactstrap';
import PrimaryButton from '../../common/PrimaryButton';
import Header from '../../common/Header';
import './Login.css';

const scopes = [
  'user-read-private',
  'playlist-read-private',
  'playlist-read-collaborative',
  'playlist-modify-public',
  'playlist-modify-private',
  'user-top-read',
  'user-library-read',
  'user-library-modify',
  'user-follow-read',
  'user-follow-modify'
]

const client_id = '4032a555b4344bc5bf846769f15adc98';
const redirect_uri = 'http://localhost:8888/callback';

const login_url = 'https://accounts.spotify.com/authorize?client_id='
+ client_id
+ '&redirect_uri='
+ redirect_uri
+ '&scope='
+ encodeURIComponent(scopes.join(' '))
+ '&response_type=token';

class Login extends React.Component {
  render () {
    return (
      <Row>
        <Col className="p-0 w-100 p-100">
          <div>
            <Header />
          </div>

          <div className="Login-header-container">
            <h1 className="Login-header text-center">ztream</h1>
          </div>

          <div className="Login-paragraph p-5">
            <p className="text-center">
              This app uses Spotify Web API to stream music directly on your device.
              Log in to search and listen to all your favorite artists.
            </p>
          </div>

          <div className="pt-4 d-flex justify-content-center">
            <PrimaryButton onClick={() => this.login()}>
              LOG IN
            </PrimaryButton>
          </div>
        </Col>
      </Row>
    )
  }

  login() {
    window.location.href="http://localhost:8888/";
  }
}

export default Login;
