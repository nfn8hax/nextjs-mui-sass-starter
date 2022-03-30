// import { useState } from 'react'
import { Box } from '@mui/material'

import styles from '../styles/footer.module.scss'
// import utilityStyles from "../../styles/utils.module.scss";

export const Footer = () => {
  return (
    <Box className={styles['footer-wrapper']}>
      <h1>This is the footer</h1>
    </Box>
  )
}
