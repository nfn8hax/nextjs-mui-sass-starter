import Head from "next/head";
import Link from "next/link";

import { Box } from "@mui/material";

import styles from "../../styles/home.module.scss";
import { Layout } from "../../components";

export default function Home() {
  return (
    <>
      {/* ------------------------------ SEO COMPONENT ----------------------------- */}
      <Head>
        <title>Pure Research Services</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Box className={styles["home-wrapper"]}>This is the home page</Box>
      </Layout>
    </>
  );
}
