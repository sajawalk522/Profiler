import React, { Component } from 'react';


class Portfolio extends Component {
  render() {
    return (
      <div>
            <div id="Portfolio" className="">
                          <div className="portfolio-area">
                            <div className="row">
                              <div className="col-sm-12">
                                <div className="row">
                                  <div className="col-sm-12">
                                      <div className="filtering-button">
                                          <a data-filter="*">All Work</a>
                                          <a data-filter=".animation" className="">Animation</a>
                                          <a data-filter=".design" className="">Design</a>
                                          <a data-filter=".illustration" className="">Illustration</a>
                                          <a data-filter=".music" className="">Music</a>
                                          <a data-filter=".photography" className="">Photography</a>
                                          <a data-filter=".videos" className="">Videos</a>
                                          <a data-filter=".print">Print Design</a>                                              
                                      </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="grid fix">
                                    <div className="grid-item col-sm-6 col-lg-4 col-xs-12 animation design print illustration acurate">
                                        <div className="single-portfolio">
                                            <div className="work_thumb">
                                                {/* <img src="Assets/1.png" alt="project1" className="img-responsive"/> */}
                                                <img src={require('../../assets/images/1.png')} alt="project1" className="img-responsive"/>
                                            </div>
                                            <div className="work-hover1">
                                                <div className="mask-work1 text-center">
                                                    <h4>Web Design</h4>
                                                    <p>Lorem ipsum dolor sit amet, consetur adipiscing elit</p>
                                                    <a className="btn" data-lightbox="example-set" data-title="Image Title" href="assets/images/portfolio/1.png">Project details</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid-item col-sm-6 col-lg-4 col-xs-12 animation design print illustration acurate">
                                        <div className="single-portfolio">
                                            <div className="work_thumb">
                                            <img src={require('../../assets/images/1.png')} alt="project1" className="img-responsive"/>
                                            </div>
                                            <div className="work-hover1">
                                                <div className="mask-work1 text-center">
                                                    <h4>Web Design</h4>
                                                    <p>Lorem ipsum dolor sit amet, consetur adipiscing elit</p>
                                                    <a className="btn" data-lightbox="example-set" data-title="Image Title" href="assets/images/portfolio/1.png">Project details</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid-item col-sm-6 col-lg-4 col-xs-12 animation design print illustration acurate">
                                        <div className="single-portfolio">
                                            <div className="work_thumb">
                                            <img src={require('../../assets/images/1.png')} alt="project1" className="img-responsive"/>
                                            </div>
                                            <div className="work-hover1">
                                                <div className="mask-work1 text-center">
                                                    <h4>Web Design</h4>
                                                    <p>Lorem ipsum dolor sit amet, consetur adipiscing elit</p>
                                                    <a className="btn" data-lightbox="example-set" data-title="Image Title" href="assets/images/portfolio/1.png">Project details</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div><div className="grid-item col-sm-6 col-lg-4 col-xs-12 animation design print illustration acurate">
                                        <div className="single-portfolio">
                                            <div className="work_thumb">
                                            <img src={require('../../assets/images/1.png')} alt="project1" className="img-responsive"/>
                                            </div>
                                            <div className="work-hover1">
                                                <div className="mask-work1 text-center">
                                                    <h4>Web Design</h4>
                                                    <p>Lorem ipsum dolor sit amet, consetur adipiscing elit</p>
                                                    <a className="btn" data-lightbox="example-set" data-title="Image Title" href="assets/images/portfolio/1.png">Project details</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div><div className="grid-item col-sm-6 col-lg-4 col-xs-12 animation design print illustration acurate">
                                        <div className="single-portfolio">
                                            <div className="work_thumb">
                                            <img src={require('../../assets/images/1.png')} alt="project1" className="img-responsive"/>
                                            </div>
                                            <div className="work-hover1">
                                                <div className="mask-work1 text-center">
                                                    <h4>Web Design</h4>
                                                    <p>Lorem ipsum dolor sit amet, consetur adipiscing elit</p>
                                                    <a className="btn" data-lightbox="example-set" data-title="Image Title" href="assets/images/portfolio/1.png">Project details</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div><div className="grid-item col-sm-6 col-lg-4 col-xs-12 animation design print illustration acurate">
                                        <div className="single-portfolio">
                                            <div className="work_thumb">
                                               <img src={require('../../assets/images/1.png')} alt="project1" className="img-responsive"/> 
                                            </div>
                                            <div className="work-hover1">
                                                <div className="mask-work1 text-center">
                                                    <h4>Web Design</h4>
                                                    <p>Lorem ipsum dolor sit amet, consetur adipiscing elit</p>
                                                    <a className="btn" data-lightbox="example-set" data-title="Image Title" href="assets/images/portfolio/1.png">Project details</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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

export default Portfolio;
