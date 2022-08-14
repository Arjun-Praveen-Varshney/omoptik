import React from "react";
import FullLayout from "../../src/layouts/FullLayout";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../src/theme/theme";
import { Grid, Stack, TextField, Button } from "@mui/material";
import BaseCard from "../../src/components/baseCard/BaseCard";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Product from "../../models/Product";
import mongoose from "mongoose";
import { useRouter } from "next/router";
import Head from "next/head";

const UpdateProduct = ({ product }) => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [billingamount, setBillingamount] = useState("");
  const [advanceamount, setAdvanceamount] = useState("");
  const [balanceamount, setBalanceamount] = useState("");
  const [rsph, setRsph] = useState("");
  const [rcyl, setRcyl] = useState("");
  const [raxis, setRaxis] = useState("");
  const [rva, setRva] = useState("");
  const [radd, setRadd] = useState("");
  const [lsph, setLsph] = useState("");
  const [lcyl, setLcyl] = useState("");
  const [laxis, setLaxis] = useState("");
  const [lva, setLva] = useState("");
  const [ladd, setLadd] = useState("");
  const [comments, setComments] = useState("");

  const handleChange = (e) => {
    if (e.target.name == "name") {
      setName(e.target.value);
    } else if (e.target.name == "address") {
      setAddress(e.target.value);
    } else if (e.target.name == "phone") {
      setPhone(e.target.value);
    } else if (e.target.name == "billingamount") {
      setBillingamount(e.target.value);
    } else if (e.target.name == "advanceamount") {
      setAdvanceamount(e.target.value);
    } else if (e.target.name == "balanceamount") {
      setBalanceamount(e.target.value);
    } else if (e.target.name == "rsph") {
      setRsph(e.target.value);
    } else if (e.target.name == "rcyl") {
      setRcyl(e.target.value);
    } else if (e.target.name == "raxis") {
      setRaxis(e.target.value);
    } else if (e.target.name == "rva") {
      setRva(e.target.value);
    } else if (e.target.name == "radd") {
      setRadd(e.target.value);
    } else if (e.target.name == "lsph") {
      setLsph(e.target.value);
    } else if (e.target.name == "lcyl") {
      setLcyl(e.target.value);
    } else if (e.target.name == "laxis") {
      setLaxis(e.target.value);
    } else if (e.target.name == "lva") {
      setLva(e.target.value);
    } else if (e.target.name == "ladd") {
      setLadd(e.target.value);
    } else if (e.target.name == "comments") {
      setComments(e.target.value);
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();
    let data = [
      {
        _id: product._id,
        name,
        slug: product.slug,
        address,
        phone,
        billingamount,
        advanceamount,
        balanceamount,
        rsph,
        rcyl,
        raxis,
        rva,
        radd,
        lsph,
        lcyl,
        laxis,
        lva,
        ladd,
        comments,
      },
    ];
    let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/updatecustomer`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let res = await a.json();
    if (res.success) {
      toast.success("Customer details updated!", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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
    setName("");
    setAddress("");
    setPhone("");
    setBillingamount("");
    setAdvanceamount("");
    setBalanceamount("");
    setRsph("");
    setRcyl("");
    setRaxis("");
    setRva("");
    setRadd("");
    setLsph("");
    setLcyl("");
    setLaxis("");
    setLva("");
    setLadd("");
    setComments("");
  };

  const deleteEntry = async () => {
    let conf = confirm("Are you sure you want to delete this entry?");
    if (conf === true) {
      // return
      let data = [
        {
          _id: product._id,
        },
      ];
      let a = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/deletecustomer`,
        {
          method: "DELETE", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      let res = await a.json();
      if (res.success) {
        toast.success("Customer deleted!", {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => {
          router.push("/allcustomers");
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
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Update Customer</title>
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
            <BaseCard title="Update Customer">
              <Stack spacing={3}>
                <TextField
                  onChange={handleChange}
                  value={name}
                  name="name"
                  label="Name"
                  variant="outlined"
                />
                <TextField
                  value={product.slug}
                  name="slug"
                  label="Slug"
                  variant="outlined"
                />
                <TextField
                  onChange={handleChange}
                  value={address}
                  name="address"
                  label="Address"
                  multiline
                  rows={4}
                />

                <TextField
                  onChange={handleChange}
                  value={phone}
                  name="phone"
                  label="Phone Number"
                  variant="outlined"
                />

                <TextField
                  onChange={handleChange}
                  value={billingamount}
                  name="billingamount"
                  label="Billing Amount"
                  variant="outlined"
                />

                <TextField
                  onChange={handleChange}
                  value={advanceamount}
                  name="advanceamount"
                  label="Advance Amount"
                  variant="outlined"
                />

                <TextField
                  onChange={handleChange}
                  value={balanceamount}
                  name="balanceamount"
                  label="Balance Amount"
                  variant="outlined"
                />
              </Stack>
              <br />
              <Button onClick={submitForm} variant="outlined" mt={2}>
                Submit
              </Button>
              <br />
              <br />
              <br />
              <br />
              <br />
              <Button
                fullWidth
                onClick={deleteEntry}
                variant="outlined"
                color="error"
                mt={2}
              >
                Delete Customer
              </Button>
            </BaseCard>
          </Grid>
        </Grid>
      </FullLayout>
    </ThemeProvider>
  );
};

export default UpdateProduct;

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
