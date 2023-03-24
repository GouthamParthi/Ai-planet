import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import styles from "./TabsWithIndicator.module.css";
function TabsWithIndicator() {
  const [value, setValue] = React.useState("all");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(value);
  };
  const tabsArray = [
    { value: "all", label: "All Submissions" },
    { value: "favourites", label: "Favourite Submissions" },
  ];
  return (
    <Box sx={{ width: "100%" }} >
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="var(--color-black)"
        TabIndicatorProps={{
          style: {
            backgroundColor: "var(--color-primary)",
          },
        }}
        aria-label="tabs"
      >
        {tabsArray.map((tab) => {
          return <Tab value={tab.value} className={styles.tabs} label={tab.label} />;
        })}
      </Tabs>
    </Box>
  );
}

export default TabsWithIndicator;
