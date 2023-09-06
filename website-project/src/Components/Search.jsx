import React, { Component } from "react";

import styles from "./Search.module.css";

class Search extends Component {
  render() {
    return (
      <div className={styles.container}>
        <p>Search what you want</p>
        <input placeholder="Search here" />
      </div>
    );
  }
}

export default Search;
