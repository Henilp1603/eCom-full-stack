import React from "react";
import {Button, Dialog} from "@radix-ui/themes";
import {ShoppingCart} from "lucide-react";
import {Link} from "react-router-dom";

const Cartbtn = () => {
  return (
    <Link to="/cart">
      {" "}
      <Button size="2">
        <ShoppingCart width={16} height={16} />
        Cart
      </Button>
    </Link>
  );
};

export default Cartbtn;
