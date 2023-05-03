import React, { Component } from "react"
import NavBar from './NavBar'
import '../css/AboutMe.css';

class LambdaDemo extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: false, msg: null }
  }

  handleClick = api => e => {
    e.preventDefault()

    this.setState({ loading: true })
    fetch("/.netlify/functions/" + api)
      .then(response => response.json())
      .then(json => this.setState({ loading: false, msg: json.msg }))
  }

  render() {
    const { loading, msg } = this.state

    return (
      <p>
        <button onClick={this.handleClick("hello")}>{loading ? "Loading..." : "Call Lambda"}</button>
        <button onClick={this.handleClick("async-dadjoke")}>{loading ? "Loading..." : "Call Async Lambda"}</button>
        <br />
        <span>{msg}</span>
      </p>
    )
  }
}

function AboutMe(){
    return (
        <div class='body'>
            <NavBar></NavBar>
            <div class="container">
                <div class='leftSide'>
                    <a class="Name">
                        Seok Jun Song
                    </a>
                    <div class="smallBoxHat"></div>
                    <div class="smallBox">
                        
                    </div>
                </div>
                <div class='rightSide'>
                <div class="bigBoxHat"></div>
                <div class="bigBox">
                    <div class='AboutMe'>
                        About Me
                    </div>
                    <div class='AboutMeBody'>
                        EXAMPLE TEXT
                    </div>
                </div>
                </div>
            </div>
            <LambdaDemo />
        </div>
      );
}

export default AboutMe;

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <LambdaDemo />
//         </header>
//       </div>
//     )
//   }
// }

// export default App
