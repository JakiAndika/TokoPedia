import React, { Component } from 'react';
import Slider from 'react-slick';
import Header from './components/Header';
import Content from './components/Content';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';
import './App.scss';

// Javascript reserved keyword

class App extends Component {
  render() {
    const settings = {
      dots: true,
      autoplay: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <div>
        <Header />
        <div className="container">
          <Slider {...settings}>
            <div><img src={require('./images/gambar1.png')} alt="Credit to Joshua Earle on Unsplash" /></div>
            <div><img src={require('./images/gambar2.png')} alt="Credit to Alisa Anton on Unsplash" /></div>
            <div><img src={require('./images/gambar3.png')} alt="Credit to Igor Ovsyannykov on Unsplash" /></div>
            <div><img src={require('./images/gambar4.png')}  alt="Credit to Pierre Châtel-Innocenti on Unsplash" /></ div>
          </Slider>
          <Content />
          
        </div>
      </div>
    );
  }
}
export default App;
