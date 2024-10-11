import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import Footer from './components/Footbar/Footer';
import React, { Component } from 'react'
import { API_URL } from './utils/constant';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menus: [],
    }
  }

  componentDidMount() {
    axios
      .get(API_URL + "products")
      .then(res => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    console.log(this.state.menus);
    return (
      <div>
        <Navbar />
        <Content />
        <Footer />
      </div>
    )
  }
}