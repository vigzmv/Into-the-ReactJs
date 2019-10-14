import React from 'react';

const User = props => {
  const { user } = props;
  return (
    <div>
      <img src={user.picture.large} className="App-img" alt="user" />
      <p>{`${user.name.title} ${user.name.first} ${user.name.last}`}</p>
      <a
        className="App-link"
        href="https://reactjs.org/docs/code-splitting.html#reactlazy"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn about React Lazy
      </a>
    </div>
  );
};

export default User;
