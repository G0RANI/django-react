import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
    state = {
        posts: []
    };

    async componentDidMount() {
        try {
            const res = await fetch('http://127.0.0.1:8000/api/');
            const posts = await res.json();
            this.setState({
                posts
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                {this.state.posts.map(item => (
                    <p>
                        {item.title}
                    </p>
                ))}
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                    Learn React
                </a>
              </header>
            </div>
          );
    }
}

export default App;