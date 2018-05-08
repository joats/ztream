import React from 'react';
import { Row, Col } from 'reactstrap';
import { fetchPlaylistTracks } from '../../../actions/api_actions'
import axios from 'axios';

class Playlist extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      tracks: [],
    }
  }

  getTracks() {
    const BASE_URL = 'https://api.spotify.com/v1'
    const token = localStorage.getItem('token')
    const authString = 'Bearer ' + token
    const playlistId = ''

    return axios
      .get(BASE_URL + `/users/joats/playlists/${playlistId}`, {
        headers: {
          Accept: 'application/json',
          Authorization: authString
        }
      }).then(data => {
        return data.data
      })
  }

  componentDidMount() {
    this.getTracks().then(data => {

    })
  }

  render() {
    return(
      <Row>
        <Col className="p-0 w-100 p-100">

        </Col>
      </Row>
    )
  }
}

export default Playlist
