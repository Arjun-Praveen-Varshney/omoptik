import React from "react";
import FullLayout from "../../src/layouts/FullLayout";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../src/theme/theme";
import {
  Grid,
  Stack,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
  FormControl,
  Button,
} from "@mui/material";
import BaseCard from "../../src/components/baseCard/BaseCard";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
import Product from "../../models/Product";
import mongoose from "mongoose";
import { useRouter } from "next/router";

const PrintBill = ({ product }) => {
  const [rno, setRno] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [phonetwo, setPhonetwo] = useState("");
  const [dateofpurchase, setDateofpurchase] = useState("");
  const [dateofdelivery, setDateofdelivery] = useState("");
  // const [products, setProducts] = useState({});
  const [totalprice, setTotalprice] = useState("");
  const [advance, setAdvance] = useState("");
  let [balance, setBalance] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    if (e.target.name == "phone") {
      setPhone(e.target.value);
    } else if (e.target.name == "phonetwo") {
      setPhonetwo(e.target.value);
    } else if (e.target.name == "totalprice") {
      setTotalprice(e.target.value);
    } else if (e.target.name == "advance") {
      setAdvance(e.target.value);
    } else if (e.target.name == "balance") {
      setBalance(e.target.value);
    } else if (e.target.name == "dateofpurchase") {
      setDateofpurchase(e.target.value);
    } else if (e.target.name == "dateofdelivery") {
      setDateofdelivery(e.target.value);
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();
    let data = [
      {
        rno: product._id,
        name: product.name,
        slug: product.slug,
        address: product.address,
        phone,
        phonetwo,
        dateofpurchase,
        dateofdelivery,
        products: {},
        totalprice,
        advance,
        balance,
      },
    ];
    let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/newbill`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let res = await a.json();
    if (res.success) {
      toast.success("Bill Generated!", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        router.push(`/viewbill/${product.slug}`);
      }, 1000);
    } else {
      toast.error("Some error occurred!", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setRno("");
    setName("");
    setAddress("");
    setPhone("");
    setPhonetwo("");
    setDateofpurchase("");
    setDateofdelivery("");
    // setProducts({});
    setTotalprice("");
    setAdvance("");
    setBalance("");
  };

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Generate a Bill</title>
      </Head>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <FullLayout>
        <Grid container spacing={0}>
          <Grid item xs={12} lg={12}>
            <BaseCard title="Bill Generator">
              <Stack spacing={3}>
                <TextField
                  value={product._id}
                  name="rno"
                  label="Receipt Number"
                  variant="outlined"
                />
                <TextField
                  value={product.name}
                  name="name"
                  label="Name"
                  variant="outlined"
                />

                <TextField
                  value={product.address}
                  name="address"
                  label="Address"
                  multiline
                  rows={4}
                />

                <TextField
                  onChange={handleChange}
                  value={phone}
                  helperText={product.phone}
                  name="phone"
                  label="Phone Number"
                  variant="outlined"
                />

                <TextField
                  onChange={handleChange}
                  value={phonetwo}
                  name="phonetwo"
                  label="Phone Number (2)"
                  variant="outlined"
                />

                <TextField
                  onChange={handleChange}
                  value={dateofpurchase}
                  name="dateofpurchase"
                  label="Date of Purchase"
                  variant="outlined"
                />

                <TextField
                  onChange={handleChange}
                  value={dateofdelivery}
                  name="dateofdelivery"
                  label="Date of Delivery"
                  variant="outlined"
                />

                <TextField
                  onChange={handleChange}
                  value={totalprice}
                  name="totalprice"
                  label="Total Price"
                  variant="outlined"
                />
                <TextField
                  onChange={handleChange}
                  value={advance}
                  name="advance"
                  label="Advance Paid"
                  variant="outlined"
                />
                <TextField
                  onChange={handleChange}
                  value={(balance = totalprice - advance)}
                  name="balance"
                  label="Balance Remaining"
                  variant="outlined"
                />
              </Stack>
              <br />
              <Button onClick={submitForm} variant="outlined" mt={2}>
                Submit
              </Button>
            </BaseCard>
          </Grid>
        </Grid>
      </FullLayout>
    </ThemeProvider>
  );
};

export default PrintBill;

export async function getServerSideProps(context) {
  let error = null;
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let product = await Product.findOne(context.query);
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}
