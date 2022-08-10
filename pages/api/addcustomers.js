// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Product from "../../models/Product";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method == "POST") {
    for (let i = 0; i < req.body.length; i++) {
      let p = new Product({
        name: req.body[i].name,
        slug: req.body[i].slug,
        address: req.body[i].address,
        phone: req.body[i].phone,
        billingamount: req.body[i].billingamount,
        advanceamount: req.body[i].advanceamount,
        balanceamount: req.body[i].balanceamount,
        rsph: req.body[i].rsph,
        rcyl: req.body[i].rcyl,
        raxis: req.body[i].raxis,
        rva: req.body[i].rva,
        radd: req.body[i].radd,
        lsph: req.body[i].lsph,
        lcyl: req.body[i].lcyl,
        laxis: req.body[i].laxis,
        lva: req.body[i].lva,
        ladd: req.body[i].ladd,
        comments: req.body[i].comments,
      });
      await p.save();
    }
    res.status(200).json({ success: "success" });
  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
};
export default connectDb(handler);
