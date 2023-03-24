import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import styles from "./SortByUpload.module.css";
function SortByUpload() {
  const [sortBy, setSortBy] = React.useState("old");

  const handleSortby = (event) => {
    setSortBy(event.target.value);
  };
  const sortByArray = [
    { value: "old", label: "Oldest" },
    { value: "new", label: "Newest" },
  ];
  return (
    <div>
      <Select value={sortBy} onChange={handleSortby} className={styles.selects}>
        {sortByArray.map((sortBy, index) => {
          return <MenuItem value={sortBy.value}>{sortBy.label}</MenuItem>;
        })}
      </Select>
    </div>
  );
}

export default SortByUpload;
