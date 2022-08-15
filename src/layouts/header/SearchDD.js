import React, { useState } from "react";
import FeatherIcon from "feather-icons-react";
import { IconButton, Input, Box, Drawer } from "@mui/material";
import { useRouter } from "next/router";

const SearchDD = ({ products }) => {
  // drawer top
  const [showDrawer2, setShowDrawer2] = useState(false);
  const [search, setsearch] = useState("");
  const router = useRouter();

  const handleDrawerClose2 = () => {
    setShowDrawer2(false);
  };

  const handleSubmit = () => {
    if (Number.parseInt(search) == search) {
      router.push(`/search?phone=${search}`);
    } else {
      products.map((product) => {
        if (
          search.localeCompare(product.name, undefined, {
            sensitivity: "accent",
          }) == 0
        ) {
          router.push(`/search?name=${product.name}`);
        } else {
          router.push(`/search?name=${search}`);
        }
      });
    }
  };

  const handleChange = (e) => {
    if (e.target.name == "search") {
      setsearch(e.target.value);
    }
  };

  return (
    <>
      <IconButton
        aria-label="show 4 new mails"
        color="inherit"
        aria-controls="search-menu"
        aria-haspopup="true"
        onClick={() => setShowDrawer2(true)}
        size="large"
      >
        <FeatherIcon icon="search" width="20" height="20" />
      </IconButton>
      <Drawer
        anchor="top"
        open={showDrawer2}
        onClose={() => setShowDrawer2(false)}
        sx={{
          "& .MuiDrawer-paper": {
            padding: "15px 30px",
          },
        }}
      >
        <Box display="flex" alignItems="center">
          <Input
            onChange={handleChange}
            // onSubmit={handleSubmit}
            value={search}
            name="search"
            placeholder="Search here"
            aria-label="description"
            fullWidth
          />
          <Box
            onClick={handleSubmit}
            sx={{
              ml: "auto",
            }}
          >
            <IconButton
              color="inherit"
              sx={{
                color: (theme) => theme.palette.grey.A200,
              }}
              onClick={handleDrawerClose2}
            >
              <FeatherIcon icon="search" />
            </IconButton>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default SearchDD;
