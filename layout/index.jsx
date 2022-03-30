import { Box } from '@mui/material'

import styles from '../styles/layout.module.scss'
import { Nav } from './Nav'
import { Footer } from './Footer'

export default function Layout({ children }) {
  // Headings can go here above where children are rendered
  return (
    <>
      <Nav />
      <Box className={styles['layout-content-wrapper']}>{children}</Box>
      <Footer />
    </>
  )
}
