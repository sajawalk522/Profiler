import React, { Component } from 'react';


class Content extends Component {
  render() {
    return (
      <div>
           <div className="content-area">
                        <div className=" row profile-div">
                            <div className="col-sm-12 col-md-6 profile-cards">
                              <div className="pro">
                                <div className="image-1">
                                    <div className="pro-content">
                                        <h1>Wesal</h1>
                                        <p>Full Stack Developer</p>
                                        <div className="progressbar">
                                          <div className="proggress"></div>
                                          <div className="percentCount percent-disp-r">80%</div>
                                          <div className="percentCount percent-disp-l">MEAN Stack</div>
                                        </div>
                                        <div className="progressbar">
                                            <div className="proggress"></div>
                                            <div className="percentCount percent-disp-r">70%</div>
                                            <div className="percentCount percent-disp-l">MERN Stack</div>
                                          </div>
                                        <button type="button" className="btn button-ex">View Profile</button>
                                    </div>
                                </div>
                               
                              </div>
                            </div>
                            <div className="col-sm-12 col-md-6 profile-cards">
                                <div className="pro">
                                  <div className="image-2">
                                      <div className="pro-content">
                                          <h1>Kamgar</h1>
                                          <p>Full Stack Developer</p>
                                          <div className="progressbar">
                                            <div className="proggress"></div>
                                            <div className="percentCount percent-disp-r">80%</div>
                                            <div className="percentCount percent-disp-l">MEAN Stack</div>
                                          </div>
                                          <div className="progressbar">
                                              <div className="proggress"></div>
                                              <div className="percentCount percent-disp-r">70%</div>
                                              <div className="percentCount percent-disp-l">MERN Stack</div>
                                            </div>
                                          <button type="button" className="btn button-ex">View Profile</button>
                                      </div>
                                  </div>
                                </div>
                              </div>
                          </div>
                          </div>
      </div>
    );
  }
}

export default Content;
