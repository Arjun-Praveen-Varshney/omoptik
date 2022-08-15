import React from "react";
import FullLayout from "../src/layouts/FullLayout";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/theme/theme";
import { Grid } from "@mui/material";
import SearchProduct from "../src/components/dashboard/SearchProduct";
import mongoose from "mongoose";
import Product from "../models/Product";
import Order from "../models/Order";
import Head from "next/head";

const Search = ({ products, orders, product }) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Search Results</title>
      </Head>
      <FullLayout products={product}>
        <Grid container spacing={0}>
          <Grid item xs={12} lg={12}>
            <SearchProduct products={products} orders={orders} />
          </Grid>
        </Grid>
      </FullLayout>
    </ThemeProvider>
  );
};

export default Search;
export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    mongoose.connect(process.env.MONGO_URI);
  }
  let products = await Product.find(context.query);
  let product = await Product.find();
  let orders = await Order.find();
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
      product: JSON.parse(JSON.stringify(product)),
      orders: JSON.parse(JSON.stringify(orders)),
    },
  };
}
