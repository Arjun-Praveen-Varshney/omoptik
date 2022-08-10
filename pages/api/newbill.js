// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Order from "../../models/Order";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method == "POST") {
    for (let i = 0; i < req.body.length; i++) {
      let p = new Order({
        rno: req.body[i].rno,
        name: req.body[i].name,
        slug: req.body[i].slug,
        address: req.body[i].address,
        phone: req.body[i].phone,
        phonetwo: req.body[i].phonetwo,
        dateofpurchase: req.body[i].dateofpurchase,
        dateofdelivery: req.body[i].dateofdelivery,
        products: req.body[i].products,
        discount: req.body[i].discount,
        totalprice: req.body[i].totalprice,
        advance: req.body[i].advance,
        balance: req.body[i].balance,
      });
      await p.save();
    }
    res.status(200).json({ success: "success" });
  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
};
export default connectDb(handler);
