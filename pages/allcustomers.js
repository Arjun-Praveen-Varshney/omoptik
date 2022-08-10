import React from "react";
import FullLayout from "../src/layouts/FullLayout";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/theme/theme";
import { Grid } from "@mui/material";
import AllProducts from "../src/components/dashboard/AllProducts";
import mongoose from "mongoose";
import Product from "../models/Product";
import Order from "../models/Order";
import Head from "next/head";

const Allproducts = ({ products, orders }) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>All Customers</title>
      </Head>
      <FullLayout>
        <Grid container spacing={0}>
          <Grid item xs={12} lg={12}>
            <AllProducts products={products} orders={orders} />
          </Grid>
        </Grid>
      </FullLayout>
    </ThemeProvider>
  );
};

export default Allproducts;

export async function getServerSideProps(context) {
  let error = null;
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let products = await Product.find();
  let orders = await Order.find();
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
      orders: JSON.parse(JSON.stringify(orders)),
    },
  };
}
