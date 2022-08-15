import { Grid } from "@mui/material";
import SalesOverview from "../src/components/dashboard/SalseOverview";
import FullLayout from "../src/layouts/FullLayout";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/theme/theme";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Product from "../models/Product";
import mongoose from "mongoose";

export default function Index({ products }) {
  const router = useRouter();
  useEffect(() => {
    const myuser = JSON.parse(localStorage.getItem("myuser"));
    if (!myuser) {
      router.push("/login");
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Admin Dashboard</title>
      </Head>
      {/* <style jsx global>
        {`
          footer {
            display: none;
          }
        `}
      </style> */}
      <FullLayout products={products}>
        <Grid container spacing={0}>
          <Grid item xs={12} lg={12}>
            <SalesOverview />
          </Grid>
          {/* ------------------------- row 1 ------------------------- */}
          {/* <Grid item xs={12} lg={4}>
            <DailyActivity />
          </Grid> */}

          {/* <Grid item xs={12} lg={8}>
            <AllOrders />
          </Grid> */}

          {/* <Grid item xs={12} lg={12}>
            <BlogCard />
          </Grid> */}
        </Grid>
      </FullLayout>
    </ThemeProvider>
  );
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    mongoose.connect(process.env.MONGO_URI);
  }
  let products = await Product.find();
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
