import { Box } from "@mui/material";

import styles from "../../styles/layout.module.scss";

export const Layout = ({ children }) => {
  // Headings can go here above where children are rendered
  return <Box className={styles["layout-component-wrapper"]}>{children}</Box>;
};
