import React, { Component } from 'react';
import './assets/css/main.css';
import './assets/css/bootstrap.css';
import './assets/css/bootstrap4.min.css';
import './assets/css/flaticon.css';
import './assets/css/responsive.css'
import HeaderNav from "./components/headerNav";
// import ContentArea from "./components/contentArea";
import SocialIcons from './components/socialIcons';


class App extends Component {
  render() {
    return (
      <div className="App">
           
        <div className="container">
            <div className="row">
               <div className="col-md-12 acurate">
                  <div className="main-card">
                      <HeaderNav/>
                      {/* <ContentArea/> */}
                       <SocialIcons/>
                      
                  </div>
               </div>
            </div>
        </div>
      
      </div>
    );
  }
}

export default App;
