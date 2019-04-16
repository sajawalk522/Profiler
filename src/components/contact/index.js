import React, { Component } from 'react';


class Contact extends Component {
  render() {
    return (
      <div>
           <div id="contact" className="">
                          <div className="contact-area">
                            <div className="row">
                                <div className="col-md-6 col-sm-12">
                                    <div className="contact-left">
                                      
                                        <div className="map-area">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1287.6404626870446!2d72.12460291146247!3d33.99950091623405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ded0948a2de239%3A0x3b7a7357a3d618ee!2sAkora+Khattak%2C+Nowshera%2C+Khyber+Pakhtunkhwa%2C+Pakistan!5e0!3m2!1sen!2s!4v1553178095194" allowfullscreen className="map"/>
                                        </div>
                                       
                                        <div className="about-info">
                                            <ul>
                                                <li><i className="flaticon-user"></i> <span>Name :</span> Allen Alex</li>  
                                                <li><i className="flaticon-user"></i> <span>Date of birth :</span>June 8, 1980</li>
                                                <li><i className="flaticon-user"></i> <span>Address : </span>San Francisco CA 94105 USA</li>
                                                <li><i className="flaticon-user"></i> <span>Phone : </span> +1-222-333-4050</li> 
                                                <li><i className="flaticon-user"></i><span>Email:</span>themeforest@gmail.com</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="contact-form">
                                        <h3>Let's Keep in Touch</h3>
                                        <form action="#">
                                            <div className="input-grup">
                                                <input type="text" placeholder="Enter your Name" id="name" name="Enter your Name"/>
                                                <input type="text" placeholder="Company " id="Company" name="Companyname"/>
                                                <input type="email" placeholder="Enter Your Email address " id="email" name="email"/>
                                                <input type="text" placeholder="Enter your phone Number" id="phonenumber" name="phonenumber"/>
                                            </div>
                                            <div className="checkbox-grup">
                                                <div className="single-check">
                                                    <input type="checkbox" id="Webdesign"/>
                                                    <label for="Webdesign">Web design</label>
                                                </div>
                                                <div className="single-check">
                                                    <input type="checkbox" id="Graphicdesign"/>
                                                    <label for="Graphicdesign">Graphic design</label>
                                                </div>
                                                <div className="single-check">
                                                    <input type="checkbox" id="uxdesign"/>
                                                    <label for="uxdesign">UX Design</label>
                                                </div>
                                                <div className="single-check">
                                                    <input type="checkbox" id="Gamedesign"/>
                                                    <label for="Gamedesign">Game design</label>
                                                </div>
                                                <div className="single-check">
                                                    <input type="checkbox" id="WebDevelopment"/>
                                                    <label for="WebDevelopment">Web Development</label>
                                                </div>  
                                                <div className="single-check">
                                                    <input type="checkbox" id="UIDesign"/>
                                                    <label for="UIDesign">UI Design</label>
                                                </div>
                                            </div>
                                            <div className="messages-area">
                                                <textarea name="message" id="message" cols="30" rows="10" placeholder="Write your message"></textarea>
                                            </div>
                                        <div className="submit-btn text-right">
                                                <button className="btn ">Submit</button>
                                        </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                          </div>
                        </div>
      </div>
    );
  }
}

export default Contact;
