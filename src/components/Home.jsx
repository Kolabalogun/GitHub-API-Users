import React from "react";
import "./Style.css";
const Home = () => {
  const API = "https://api.github.com/users";

  const [users, usersF] = React.useState([]);

  const getAPI = async () => {
    const res = await fetch(API);
    const users = await res.json();

    console.log(users);
    usersF(users);
  };

  React.useEffect(() => {
    getAPI();
  }, []);

  const UserElement = users.map((user) => (
    <li key={user.id}>
      <img src={user.avatar_url} alt="" />
      <div className="ff">
        <h3>{user.login}</h3>
        <a href={user.html_url}>Profile</a>
      </div>
    </li>
  ));

  return (
    <div className="container">
      <h2>GitHub Users</h2>

      <ul className="users">{UserElement}</ul>
    </div>
  );
};

export default Home;
