import React, { Component } from "react";
import InfoSection from "./Components/InfoSection";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      username: "",
      hasData: "",
      profileImage: "",
      link: "",
      follower: "",
      following: "",
      posts: "",
      bio: "",
      isPrivate: "",
      isVerified: "",
      isBussinessAccount: "",
    };
  }

  componentDidMount() {}

  getDataFromAPI() {
    fetch("https://instagram.com/" + this.state.username + "/?__a=1")
      .then((response) => response.json())
      .then((json) => {
        if (!json.graphql) {
          return;
        }
        let data = json.graphql.user;
        var hasData = data ? true : false;
        this.setState({
          hasData: hasData,
          profileImage: data.profile_pic_url_hd,
          posts: data.edge_owner_to_timeline_media.count,
          follower: data.edge_followed_by.count,
          following: data.edge_follow.count,
          bio: data.biography,
          isPrivate: data.is_private,
          link: data.external_url,
          fullname: data.full_name,
          isVerified: data.is_verified,
          isBussinessAccount: data.is_business_account,
        });
        // console.log(data);
      });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <h6 className="col p-2 text-center bg-dark text-white">
            Instagram Account's Overview
          </h6>
        </div>

        <div className="row">
          <div className="col text-center p-2 h3">Let's transgress!</div>
        </div>

        <div className="row d-block align-items-center text-center">
          <div className="col py-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Username"
              onChange={(value) => {
                this.setState({ username: value.target.value });
              }}
            />
          </div>
          <div className="col">
            <button
              className="btn btn-dark rounded-pill"
              onClick={() => {
                this.getDataFromAPI();
              }}
            >
              Search
            </button>
          </div>
        </div>

        {this.state.hasData ? <InfoSection info={this.state} /> : ""}
      </div>
    );
  }
}

export default App;
