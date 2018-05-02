import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAuthToAPI } from '../../../actions/user_actions';
import { fetchUser, fetchPlaylists } from '../../../actions/api_actions';
import Header from '../../common/Header';
import axios from 'axios';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playlists: [],
      userImageUrl: '',
    }
  }

  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  componentWillMount() {
    const token = this.getHashParams()
    this.props.setAuthToAPI(token.access_token)
  }

  renderHeaderImage(user) {
    this.setState({
      userImageUrl: user.images[0].url,
    })
  }

  renderPlaylists(data) {
    this.setState({
      playlists: data,
    })
  }

  componentDidMount() {
    fetchUser().then(user => {
      this.renderHeaderImage(user)
    })
    fetchPlaylists().then(data => {
      this.renderPlaylists(data)
    })
  }

  render() {
    console.log(this.state.playlists)
    const playlistList = this.state.playlists.map(playlist => (
      <li className="Home-playlist pt-3 d-flex align-items-center">
        <div>
          <img className="Home-playlist-image" src={playlist.images[0].url} alt="playlist" />
        </div>

        <div className="pl-2">
          <p className="m-0">{playlist.name}</p>
          <p className="Home-playlist-tracks m-0">{playlist.tracks.total} tracks</p>
        </div>

        <div className="ml-auto pr-3">
          <i className="Home-playlist-btn fas fa-caret-right" />
        </div>
      </li>
    ))
    return (
      <Row className="Home-container">
        <Col className="p-0 w-100 p-100">
          <div>
            <Header className="Home-Header">
              <div className="h-100 pr-3 d-flex align-items-center flex-row-reverse">
                <Link to="/profile">
                  <img className="Home-profile-image" src={this.state.userImageUrl} alt="user" />
                </Link>
              </div>
            </Header>
          </div>
          <ul className="Home-playlist-container">
            {playlistList}
          </ul>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps(state) {
  return {
    playlists: state.playlists
  }
}

export default connect(mapStateToProps, {
  setAuthToAPI,
})(Home)
