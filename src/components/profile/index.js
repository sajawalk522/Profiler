import React, { Component } from 'react';


class Profile extends Component {
  render() {
    return (
      
          <div id="profile" className="">
            <div className="profile-area">
            <div className="row">
                <div className="col-sm-12 col-md-6">
                <div className="profile-img">
                    <a href="/">
                       {/* <img className="img-responsive" src="../../assets/images/man.png" alt="man"/> */}
                       <img src={require('../../assets/images/man.png')} alt="man"/>
                    </a>
                </div>
                </div>
                <div className="col-sm-12 col-md-6">
                <div className="profile-info">
                    <div className="name">
                    <h1>Allen Alex</h1>
                    <h4>professional UX Designer</h4>
                    </div>
                    <div className="about-info">
                    <ul>
                        <li><i className="flaticon-user"></i><span>Name :</span> Allen Alex</li>
                        <li><i className="flaticon-user"></i><span>Date of birth :</span> June 8, 1980</li>
                        <li><i className="flaticon-user"></i><span>Address :</span> San Francisco CA 94105 USA</li>
                        <li><i className="flaticon-user"></i><span>Phone :</span> +1-222-333-4050</li>
                        <li><i className="flaticon-user"></i><span>Email:</span> themeforest@gmail.com</li>
                    </ul>
                    </div>
                    <div className="objective-area">
                        <h3>Objective</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do 
                            eiusmod tempor incididunt ut labore etdolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehen
                            derit in voluptate velit esse cillum dolore eu fugiat nulla.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>            
      
    );
  }
}

export default Profile;
