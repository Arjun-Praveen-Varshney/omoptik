const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    address: { type: String, default: "" },
    phone: { type: String, default: "" },
    rsph: { type: String, default: "" },
    rcyl: { type: String, default: "" },
    raxis: { type: String, default: "" },
    rva: { type: String, default: "" },
    radd: { type: String, default: "" },
    lsph: { type: String, default: "" },
    lcyl: { type: String, default: "" },
    laxis: { type: String, default: "" },
    lva: { type: String, default: "" },
    ladd: { type: String, default: "" },
    comments: { type: String, default: "" },
  },
  { timestamps: true }
);

mongoose.models = {};
export default mongoose.model("Product", ProductSchema);
// export default mongoose.model.Product ||
//   mongoose.model("Product", ProductSchema);
