// import { useState } from 'react'
import { Box } from '@mui/material'

import styles from '../styles/nav.module.scss'
// import utilityStyles from "../../styles/utils.module.scss";

export const Nav = () => {
  return (
    <Box className={styles['nav-wrapper']}>
      <h1>This is the nav</h1>
    </Box>
  )
}
