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
import Order from "../../models/Order";
import mongoose from "mongoose";
import { useRouter } from "next/router";

const UpdateBill = ({ product, order, products }) => {
  const [rno, setRno] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [phonetwo, setPhonetwo] = useState("");
  const [dateofpurchase, setDateofpurchase] = useState("");
  const [dateofdelivery, setDateofdelivery] = useState("");
  // let [products, setProducts] = useState({});
  const [totalprice, setTotalprice] = useState("");
  const [advance, setAdvance] = useState("");
  let [balance, setBalance] = useState("");
  const [discount, setDiscount] = useState("");
  const router = useRouter();
  const [formValues, setFormValues] = useState([{ sno: "", title : "", quantity: "", price: ""}])

    let formChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
      }
    
    let addFormFields = () => {
        setFormValues([...formValues, { sno: "", title: "", quantity: "", price: "" }])
      }

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
    } else if (e.target.name == "discount") {
      setDiscount(e.target.value);
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();
    let data = [
      {
        _id: order._id,
        rno: product._id,
        name: product.name,
        slug: product.slug,
        address: product.address,
        phone,
        phonetwo,
        dateofpurchase,
        dateofdelivery,
        products: formValues,
        discount,
        totalprice,
        advance,
        balance,
      },
    ];
    let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/updatebill`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let res = await a.json();
    if (res.success) {
      toast.success("Bill Updated!", {
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
    setDiscount("");
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
      <FullLayout products={products}>
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

                {/* <TextField
                  onChange={handleChange}
                  value={sno}
                  name="sno"
                  label="Product ka sno"
                  variant="outlined"
                />
                <TextField
                  onChange={handleChange}
                  value={title}
                  name="title"
                  label="Product ka naam"
                  variant="outlined"
                />
                <TextField
                  onChange={handleChange}
                  value={quantity}
                  name="quantity"
                  label="Product ki quantity"
                  variant="outlined"
                />
                <TextField
                  onChange={handleChange}
                  value={price}
                  name="price"
                  label="Product ka price"
                  variant="outlined"
                /> */}

                <div className="w-full mx-auto overflow-auto">
                  <table className="table-auto w-full text-left whitespace-no-wrap">
                    <thead>
                      <tr>
                        <th
                          className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 text-center border-2 border-black"
                          colSpan="4"
                        >
                          Add Products
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-3 border-2 border-black">
                          S. No.
                        </td>
                        <td className="px-4 py-3 border-2 border-black">
                          Product
                        </td>
                        <td className="px-4 py-3 border-2 border-black">
                          Quantity
                        </td>
                        <td className="px-4 py-3 border-2 border-black">
                          Price
                        </td>
                      </tr>
{formValues.map((element, index) => (
                      <tr key={index}>
                        <td className="px-4 py-3 font-bold text-black border-2 border-black">
                          <input
                            onChange={e => formChange(index, e)}
                            value={element.sno || ""}
                            name="sno"
                            // variant="outlined"
                          />
                        </td>
                        <td className="px-4 py-3 font-bold text-black border-2 border-black">
                          <input
                            onChange={e => formChange(index, e)}
                            value={element.title || ""}
                            name="title"
                            // variant="outlined"
                          />
                        </td>
                        <td className="px-4 py-3 font-bold text-black border-2 border-black">
                          <input
                            onChange={e => formChange(index, e)}
                            value={element.quantity || ""}
                            name="quantity"
                            // variant="outlined"
                          />
                        </td>
                        <td className="px-4 py-3 font-bold text-black border-2 border-black">
                          <input
                            onChange={e => formChange(index, e)}
                            value={element.price || ""}
                            name="price"
                            // variant="outlined"
                          />
                        </td>
                      </tr>
))}
                      <tr>
                        <td
                          className="px-4 py-3 font-bold text-lg text-black border-2 border-black bg-slate-500"
                          colSpan={4}
                        >
                          <button className="w-full" onClick={() => addFormFields()}>Add New Product</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <TextField
                  onChange={handleChange}
                  value={discount}
                  name="discount"
                  label="Discount"
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

export default UpdateBill;

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    mongoose.connect(process.env.MONGO_URI);
  }
  let product = await Product.findOne(context.query);
  let order = await Order.findOne(context.query);
  let products = await Product.find();
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
      order: JSON.parse(JSON.stringify(order)),
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
