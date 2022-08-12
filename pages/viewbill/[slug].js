import React from "react";
import Head from "next/head";
import Order from "../../models/Order";
import mongoose from "mongoose";

const ViewBill = ({ bill }) => {
  const getPdf = () => {
    let pb = document.getElementById("printBill");
    pb.classList.add("hidden");
    window.print();
    setTimeout(() => {
      pb.classList.remove("hidden");
    }, 1000);
  };
  return (
    <section className="text-gray-600 body-font">
      <Head>
        <title>Bill</title>
      </Head>
      <div className="container px-5 mx-auto">
        <img
          src="/ARJUN.png"
          alt="logo"
          className="w-12 md:w-24 rounded rounded-full md:ml-4 md:mt-6 md:-mb-28 mt-2 mx-auto"
        />
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            Om Optik
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            10, Durga Prasad,
            <br />
            156, M.C.C.H. Society,
            <br />
            Panvel-410206
            <br />
            {/* <i className="fa fa-phone mr-4"></i> */}
            <img
              src="/phone-call.svg"
              alt="phone"
              className="inline mr-4 w-5"
            />
            9969132371
          </p>
        </div>
        <div className="-mt-4 mb-4 text-sm">
          <table className="text-left">
            <tbody>
              <tr>
                <td>Serial No.:</td>
                <td className="pl-12 font-bold text-black">{bill.rno}</td>
              </tr>
              <tr>
                <td>Customer Name:</td>
                <td className="pl-12 font-bold text-black">{bill.name}</td>
              </tr>
              <tr>
                <td>Address:</td>
                <td className="pl-12 font-bold text-black">{bill.address}</td>
              </tr>
              <tr>
                <td>Phone No.:</td>
                <td className="pl-12 font-bold text-black">{bill.phone}</td>
              </tr>
              {!bill.products && (
                <tr>
                  <td>Phone No. (2):</td>
                  <td className="pl-12 font-bold text-black">
                    {bill.phonetwo}
                  </td>
                </tr>
              )}
              {!bill.products && (
                <tr>
                  <td>Date of Purchase:</td>
                  <td className="pl-12 font-bold text-black">
                    {bill.dateofpurchase}
                  </td>
                </tr>
              )}
              {!bill.products && (
                <tr>
                  <td>Date of Delivery:</td>
                  <td className="pl-12 font-bold text-black">
                    {bill.dateofdelivery}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="w-full mx-auto overflow-auto">
          <table className="table-auto w-full text-left whitespace-no-wrap">
            {bill.products && (
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                    S. No.
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Product
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Quantity
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Price
                  </th>
                </tr>
              </thead>
            )}
            <tbody>
              {bill.products &&
                Object.keys(bill.products).map((k) => {
                  return (
                    <tr key={k}>
                      <td className="px-4 py-3">{bill.products[k].sno}</td>
                      <td className="px-4 py-3">{bill.products[k].title}</td>
                      <td className="px-4 py-3">{bill.products[k].quantity}</td>
                      <td className="px-4 py-3 text-lg text-gray-900">
                        ₹{bill.products[k].price}
                      </td>
                    </tr>
                  );
                })}
              {bill.products && (
                <tr>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 font-bold text-black text-lg">
                    Discount
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 font-bold text-black"></td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 font-bold text-black"></td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg font-bold text-black">
                    ₹{bill.discount}
                  </td>
                </tr>
              )}
              <tr>
                <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 font-bold text-black text-lg">
                  Total
                </td>
                <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 font-bold text-black"></td>
                <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 font-bold text-black"></td>
                <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg font-bold text-black">
                  ₹{bill.totalprice}
                </td>
              </tr>
              {!bill.products && (
                <tr>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 font-bold text-black text-lg">
                    Advance Paid
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 font-bold text-black"></td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 font-bold text-black"></td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg font-bold text-black">
                    ₹{bill.advance}
                  </td>
                </tr>
              )}
              {!bill.products && (
                <tr>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 font-bold text-black text-lg">
                    Balance Amount
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 font-bold text-black"></td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 font-bold text-black"></td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg font-bold text-black">
                    ₹{bill.balance}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
          <button
            onClick={getPdf}
            id="printBill"
            className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
          >
            Print
          </button>
        </div>
      </div>
      <div>
        <p className="ml-4 text-sm">
          i. This is a computer-generated receipt. No signature required.
          <br />
          ii. Order once placed cannot be cancelled.
          <br />
          iii. Delivery must be taken within 2 months of ordering. After that Om
          Optik Panvel is not responsible for the safety of the product.
          <br />
          iv. Shop closed on Sunday.
        </p>
      </div>
    </section>
  );
};

export default ViewBill;

export async function getServerSideProps(context) {
  let error = null;
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let bill = await Order.findOne(context.query);
  return {
    props: {
      bill: JSON.parse(JSON.stringify(bill)),
    },
  };
}
