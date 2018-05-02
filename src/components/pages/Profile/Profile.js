import React from 'react';
import { Row, Col } from 'reactstrap';
import { fetchUser } from '../../../actions/api_actions'
import { Link } from 'react-router-dom'
import PrimaryButton from '../../common/PrimaryButton';
import Header from '../../common/Header';
import './Profile.css';

class Profile extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      displayName: 'name',
      country: 'country',
      email: 'email',
      birthdate: 'birthdate',
      imageUrl: 'image',
      followers: 'followers',
    }
  }

  renderUserInfo(user) {
    this.setState({
      displayName: user.display_name,
      country: user.country,
      email: user.email,
      birthdate: user.birthdate,
      imageUrl: user.images[0].url,
      followers: user.followers.total,
    })
  }

  componentWillMount() {
    fetchUser().then(user => {
      this.renderUserInfo(user)
    })
  }

  render() {
    return(
      <Row>
        <Col className="p-0 w-100 p-100">
          <div>
            <Header>
              <div className="h-100 pl-2 d-flex align-items-center">
                <Link to="/home">
                  <i className="Profile-back-btn fas fa-angle-left" />
                </Link>
              </div>
            </Header>
          </div>

          <div className="Profile-image-container text-center">
            <img className="Profile-image" src={this.state.imageUrl} alt="profile"/>
          </div>

          <div className="pt-4 text-center">
            <h3>{this.state.displayName}</h3>
          </div>

          <div className="Profile-info-container pt-4">
            <div className="text-center">
              <label>email</label>
              <p>{this.state.email}</p>
            </div>

            <div className="pl-5 pr-5 pt-4 d-flex justify-content-around">
              <div className="text-center">
                <label>country</label>
                <p>{this.state.country}</p>
              </div>

              <div className="text-center">
                <label>followers</label>
                <p>{this.state.followers}</p>
              </div>
            </div>
          </div>

          <div className="pt-4 d-flex justify-content-center">
            <Link to="/">
              <PrimaryButton>
                LOG OUT
              </PrimaryButton>
            </Link>
          </div>
        </Col>
      </Row>
    )
  }
}

export default Profile
