import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import BlogPage from './components/BlogPage';
import ProfilePage from './components/ProfilePage';
import Navbar from './components/Navbar';
import BlogContext from './contexts/blog-context';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          id: 1,
          title: 'First Post'
        },
        {
          id: 2,
          title: 'Second Post'
        },
        {
          id: 3,
          title: 'Third Post'
        },
        {
          id: 4,
          title: 'Fourth Post'
        },
      ]
    }
  }

  render() {
    return (
      <>
        <Navbar />
        <BlogContext.Provider value={{ posts: this.state.posts }}>
          <Switch>
            <Route exact path='/' component={BlogPage} />
            <Route path='/profile' component={ProfilePage} />
          </Switch>
        </BlogContext.Provider>
      </>
    );
  }
}

export default App;
