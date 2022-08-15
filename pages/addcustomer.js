import React from "react";
import FullLayout from "../src/layouts/FullLayout";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/theme/theme";
import { Grid, Stack, TextField, Button } from "@mui/material";
import BaseCard from "../src/components/baseCard/BaseCard";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
import slugify from "slugify";
import Product from "../models/Product";
import mongoose from "mongoose";

const Addproduct = ({ products }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
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
  const someslug = slugify(
    `${name} ${phone} ${Math.floor(Math.random() * Date.now())}`,
    {
      replacement: "-",
      remove: undefined,
      lower: true,
      strict: false,
      locale: "vi",
      trim: true,
    }
  );

  const handleChange = (e) => {
    if (e.target.name == "name") {
      setName(e.target.value);
    } else if (e.target.name == "address") {
      setAddress(e.target.value);
    } else if (e.target.name == "phone") {
      setPhone(e.target.value);
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
        name,
        slug: someslug,
        address,
        phone,
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
    let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/addcustomers`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let res = await a.json();
    if (res.success) {
      toast.success("Customer added!", {
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

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Add Customer</title>
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
      <FullLayout products={products}>
        <Grid container spacing={0}>
          <Grid item xs={12} lg={12}>
            <BaseCard title="Add a Customer">
              <Stack spacing={3}>
                <TextField
                  onChange={handleChange}
                  value={name}
                  name="name"
                  label="Name"
                  variant="outlined"
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
                  value={address}
                  name="address"
                  label="Address"
                  multiline
                  rows={4}
                />

                <div className="w-full mx-auto overflow-auto">
                  <table className="table-auto w-full text-left whitespace-no-wrap">
                    <thead>
                      <tr>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl border-2 border-black"></th>
                        <th
                          className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 text-center border-2 border-black"
                          colSpan="4"
                        >
                          RIGHT EYE
                        </th>
                        <th
                          className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 text-center border-2 border-black"
                          colSpan="4"
                        >
                          LEFT EYE
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-3 border-2 border-black"></td>
                        <td className="px-4 py-3 border-2 border-black">
                          SPH.
                        </td>
                        <td className="px-4 py-3 border-2 border-black">
                          CYL.
                        </td>
                        <td className="px-4 py-3 border-2 border-black">
                          AXIS
                        </td>
                        <td className="px-4 py-3 border-2 border-black">V/A</td>
                        <td className="px-4 py-3 border-2 border-black">
                          SPH.
                        </td>
                        <td className="px-4 py-3 border-2 border-black">
                          CYL.
                        </td>
                        <td className="px-4 py-3 border-2 border-black">
                          AXIS
                        </td>
                        <td className="px-4 py-3 border-2 border-black">V/A</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-bold text-black text-lg border-2 border-black">
                          Distance
                        </td>
                        <td className="px-4 py-3 font-bold text-black border-2 border-black">
                          <input
                            onChange={handleChange}
                            value={rsph}
                            name="rsph"
                            // variant="outlined"
                          />
                        </td>
                        <td className="px-4 py-3 font-bold text-black border-2 border-black">
                          <input
                            onChange={handleChange}
                            value={rcyl}
                            name="rcyl"
                            // variant="outlined"
                          />
                        </td>
                        <td className="px-4 py-3 font-bold text-black border-2 border-black">
                          <input
                            onChange={handleChange}
                            value={raxis}
                            name="raxis"
                            // variant="outlined"
                          />
                        </td>
                        <td className="px-4 py-3 font-bold text-black border-2 border-black">
                          <input
                            onChange={handleChange}
                            value={rva}
                            name="rva"
                            // variant="outlined"
                          />
                        </td>
                        <td className="px-4 py-3 font-bold text-black border-2 border-black">
                          <input
                            onChange={handleChange}
                            value={lsph}
                            name="lsph"
                            // variant="outlined"
                          />
                        </td>
                        <td className="px-4 py-3 font-bold text-black border-2 border-black">
                          <input
                            onChange={handleChange}
                            value={lcyl}
                            name="lcyl"
                            // variant="outlined"
                          />
                        </td>
                        <td className="px-4 py-3 font-bold text-black border-2 border-black">
                          <input
                            onChange={handleChange}
                            value={laxis}
                            name="laxis"
                            // variant="outlined"
                          />
                        </td>
                        <td className="px-4 py-3 font-bold text-black border-2 border-black">
                          <input
                            onChange={handleChange}
                            value={lva}
                            name="lva"
                            // variant="outlined"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-bold text-black text-lg border-2 border-black">
                          Addition
                        </td>
                        <td
                          colSpan="4"
                          className="px-4 py-3 font-bold text-black border-2 border-black"
                        >
                          <input
                            onChange={handleChange}
                            value={radd}
                            name="radd"
                            // variant="outlined"
                          />
                        </td>
                        <td
                          colSpan="4"
                          className="px-4 py-3 font-bold text-black border-2 border-black"
                        >
                          <input
                            onChange={handleChange}
                            value={ladd}
                            name="ladd"
                            // variant="outlined"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-bold text-lg text-black border-2 border-black">
                          Notes
                        </td>
                        <td
                          className="px-4 py-3 text-black border-2 border-black"
                          colSpan="8"
                        >
                          <input
                            onChange={handleChange}
                            value={comments}
                            name="comments"
                            // variant="outlined"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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

export default Addproduct;
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
