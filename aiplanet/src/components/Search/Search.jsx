import React from "react";
import styles from "./Search.module.css";
import SearchIcon from "@mui/icons-material/Search";
function Search() {
  return (
    <div className={styles.container}>
      <SearchIcon className={styles.searchIcon}/>
      <input placeholder="Search" className={styles.search} type="text" />
    </div>
  );
}

export default Search;
