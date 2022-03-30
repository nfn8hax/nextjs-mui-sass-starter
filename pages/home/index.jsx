import Head from 'next/head'
// import Link from "next/link";

import { Box } from '@mui/material'

import styles from '../../styles/home.module.scss'
import Layout from '../../layout'

export default function Home() {
  return (
    <>
      {/* ------------------------------ SEO COMPONENT ----------------------------- */}
      <Head>
        <title>Page Title</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Box className={styles['home-wrapper']}>
          <h1>This is the home page</h1>
        </Box>
      </Layout>
    </>
  )
}
