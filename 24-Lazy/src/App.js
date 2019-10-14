import React, { Component } from 'react';

const User = React.lazy(() => import('./User'));

const fetchRandomUser = () =>
  fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(res => res.results[0]);

class App extends Component {
  state = {
    user: null
  };

  loadUser = () => {
    this.setState(
      {
        loading: true
      },
      async () =>
        this.setState({ user: await fetchRandomUser(), loading: false })
    );
  };

  render() {
    const { user, loading } = this.state;

    return (
      <div className="App">
        <React.Suspense fallback={<div>Loading Component...</div>}>
          {user && <User user={user} />}
          {loading ? (
            <div>Loading User...</div>
          ) : (
            !user && <button onClick={this.loadUser}>Press Me!!</button>
          )}
        </React.Suspense>
      </div>
    );
  }
}

export default App;
