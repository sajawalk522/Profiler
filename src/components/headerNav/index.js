import React, { Component } from 'react';
import "../../assets/css/main.css";
import "../../assets/css/bootstrap4.min.css";
import "../../assets/css/bootstrap.css";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Profile from "../profile";
import Portfolio from "../portfolio";
import ContentArea from "../contentArea";
import Resume from "../resume";
import Services from "../services";
import Testimonial from "../testimonial";
import Contact from "../contact";
class NavHeader extends Component {
  render() {
    return (
      <div>
          <Router>
             <div className="row">
                      <div className="col-md-2 col-sm-12">
                        <div className="header-text">
                          <h1>Ka-Wi</h1>
                        </div>
                      </div>
                      <div className="col-md-10 col-sm-12 text-right">
                        <div className="navigation">
                          <ul className="nav nav-pills" onclick="$('.profile-div').css('display','none');">
                            <li>
                              <Link to="/profile" data-toggle="tab">
                                <span className="flaticon-user"></span> Profile
                              </Link>
                            </li>
                            <li>
                              <Link data-toggle="tab" to="/resume">
                                <span className="flaticon-resume"></span> Resume
                              </Link>
                            </li>
                            <li>
                              <Link to="/services" data-toggle="tab">
                                <span className="flaticon-layers"></span> Services
                              </Link>
                            </li>
                            <li>
                              <Link to="/portfolio" data-toggle="tab">
                                <span className="flaticon-gallery"></span> Portfolio
                              </Link>
                            </li>
                            <li>
                              <Link to="/testimonial" data-toggle="tab">
                                <span className="flaticon-rating"></span> Testimonial
                              </Link>
                            </li>
                            <li>
                              <Link to="/contact" data-toggle="tab">
                                <span className="flaticon-chat"></span> Contact
                              </Link>
                            </li>
                          </ul>
                        </div>  
                      </div>
                    </div>
                    <div className="tab-content">
                      <Switch>
                        <Route exact path='/' component={ContentArea} />
                        <Route path='/profile' component={Profile} />
                        <Route path='/portfolio' component={Portfolio} />
                        <Route path='/resume' component={Resume} />
                        <Route path='/Services' component={Services} />
                        <Route path='/testimonial' component={Testimonial} />
                        <Route path='/contact' component={Contact} />
                      </Switch> 
                     </div>
                    
          </Router>
      </div>
    );
  }
}

export default NavHeader;
