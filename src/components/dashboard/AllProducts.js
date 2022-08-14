import React from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
} from "@mui/material";
import BaseCard from "../baseCard/BaseCard";
import Link from "next/link";

const AllProducts = ({ products, orders }) => {
  let orderit = orders.map((order) => {
    return order.slug;
  });
  return (
    <BaseCard title="All Customers">
      <Table
        aria-label="simple table"
        sx={{
          mt: 3,
          whiteSpace: "nowrap",
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Comments
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Name / Phone
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                {/* Billing */}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                {/* Advance */}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                {/* Balance */}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                {/* Balance */}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                {/* Balance */}
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.slug}>
              <TableCell>
                <Chip
                  sx={{
                    pl: "4px",
                    pr: "4px",
                    backgroundColor: "#00c292",
                    color: "#fff",
                  }}
                  size="small"
                  label={product.comments}
                ></Chip>
              </TableCell>
              <TableCell>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "600",
                      }}
                    >
                      {product.name}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      sx={{
                        fontSize: "13px",
                      }}
                    >
                      {product.phone}
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  <Link
                    passHref={true}
                    href={`/specsprescription/${product.slug}`}
                  >
                    <Chip
                      sx={{
                        pl: "4px",
                        pr: "4px",
                        backgroundColor: "#953553",
                        color: "#fff",
                      }}
                      size="small"
                      label="Prescription"
                    ></Chip>
                  </Link>
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  {orderit.includes(product.slug) === true && (
                    <Link passHref={true} href={`/viewbill/${product.slug}`}>
                      <Chip
                        sx={{
                          pl: "4px",
                          pr: "4px",
                          backgroundColor: "#ff4500",
                          color: "#fff",
                        }}
                        size="small"
                        label="View Bill"
                      ></Chip>
                    </Link>
                  )}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  {orderit.includes(product.slug) === false && (
                    <Link passHref={true} href={`/printbill/${product.slug}`}>
                      <Chip
                        sx={{
                          pl: "4px",
                          pr: "4px",
                          backgroundColor: "#000000",
                          color: "#fff",
                        }}
                        size="small"
                        label="Generate token"
                      ></Chip>
                    </Link>
                  )}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  {orderit.includes(product.slug) === true && (
                    <Link passHref={true} href={`/updatebill/${product.slug}`}>
                      <Chip
                        sx={{
                          pl: "4px",
                          pr: "4px",
                          backgroundColor: "#0000ff",
                          color: "#fff",
                        }}
                        size="small"
                        label="Generate Bill"
                      ></Chip>
                    </Link>
                  )}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  align="center"
                  sx={{
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  <Link
                    passHref={true}
                    href={`/updatecustomer/${product.slug}`}
                  >
                    <Chip
                      sx={{
                        pl: "4px",
                        pr: "4px",
                        backgroundColor: "#ff0000",
                        color: "#fff",
                      }}
                      size="small"
                      label="Update Customer"
                    ></Chip>
                  </Link>
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </BaseCard>
  );
};

export default AllProducts;
