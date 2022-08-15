import React from "react";
import FullLayout from "../../src/layouts/FullLayout";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../src/theme/theme";
import { Grid, Stack, Button } from "@mui/material";
import BaseCard from "../../src/components/baseCard/BaseCard";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Product from "../../models/Product";
import mongoose from "mongoose";
import Head from "next/head";

const Slug = ({ product, products }) => {
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
    if (e.target.name == "rsph") {
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
      toast.success("Customer ke chashme ka number badal gya!", {
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
        <title>Specs Prescription for {product.name}</title>
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
            <BaseCard title="Update Lens Prescription">
              <Stack spacing={3}>
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
                <br />
                <Button onClick={submitForm} variant="outlined" mt={2}>
                  Submit
                </Button>
                <br />
                <br />
                <br />
                <h1 className="font-semibold text-black text-xl">
                  Previous Records
                </h1>
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
                          {product.rsph}
                        </td>
                        <td className="px-4 py-3 font-bold text-black border-2 border-black">
                          {product.rcyl}
                        </td>
                        <td className="px-4 py-3 font-bold text-black border-2 border-black">
                          {product.raxis}
                        </td>
                        <td className="px-4 py-3 font-bold text-black border-2 border-black">
                          {product.rva}
                        </td>
                        <td className="px-4 py-3 font-bold text-black border-2 border-black">
                          {product.lsph}
                        </td>
                        <td className="px-4 py-3 font-bold text-black border-2 border-black">
                          {product.lcyl}
                        </td>
                        <td className="px-4 py-3 font-bold text-black border-2 border-black">
                          {product.laxis}
                        </td>
                        <td className="px-4 py-3 font-bold text-black border-2 border-black">
                          {product.lva}
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
                          {product.radd}
                        </td>
                        <td
                          colSpan="4"
                          className="px-4 py-3 font-bold text-black border-2 border-black"
                        >
                          {product.ladd}
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
                          {product.comments}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Stack>
            </BaseCard>
          </Grid>
        </Grid>
      </FullLayout>
    </ThemeProvider>
  );
};

export default Slug;

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    mongoose.connect(process.env.MONGO_URI);
  }
  let product = await Product.findOne(context.query);
  let products = await Product.find();
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
