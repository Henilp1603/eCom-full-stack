import {Badge, Button, Text} from "@radix-ui/themes";
import {Star, StarHalf, StarIcon, StarOffIcon, Stars} from "lucide-react";
import React, {useCallback, useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useProductContext} from "../Contexts/ProductContext";
import {useQuery} from "react-query";
import axios from "axios";
import {Rating} from "@mui/material";
import {useCartContext} from "../Contexts/CartContext";

export default function SingleProduct() {
  const {id} = useParams();
  const navigate = useNavigate();

  const {
    getSingleProduct,
    singleProducts,
    handelSizeSelect,
    handelColorSelect,
  } = useProductContext();

  const {addToCart} = useCartContext();

  const handleBuyNow = (
    item,
    selectedColor,
    selectedImg,
    selectedPrice,
    selectedSize
  ) => {
    addToCart(
      item.id,
      item,
      selectedColor,
      selectedImg,
      selectedPrice,
      selectedSize
    );
    navigate("/cart");
  };

  const API = `${import.meta.env.VITE_SERVER_API}/api/product/get-product/${id}`;

  const {isLoading, isError, data} = useQuery({
    queryKey: ["singleProduct"],
    queryFn: () => getSingleProduct(API),
  });

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : isError ? (
        <h1>Error</h1>
      ) : (
        <div className="flex items-start justify-center p-10 max-lg:flex-col max-lg:items-center">
          <div className="w-[30%] overflow-hidden h-1/2 aspect-auto rounded-2xl max-lg:w-1/2">
            <img
              src={singleProducts.selectedColor.image[0]}
              alt="Product Photo"
              style={{
                display: "block",
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          <div className="w-[50%] p-10 h-2/3 max-lg:w-full">
            <div className="flex flex-col items-start justify-start w-full h-full gap-3">
              <h1 className="text-3xl font-bold">{singleProducts.title}</h1>
              <div className="flex gap-2">
                {singleProducts.category.map((p) => (
                  <Badge variant="soft">{p}</Badge>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <p className="font-semibold">{singleProducts.totalRating}</p>
                </div>
                <div className="flex items-center gap-1">
                  <Rating value={singleProducts.totalRating} readOnly />
                </div>
              </div>
              <div className="flex flex-row-reverse items-center gap-3">
                <p className="text-lg font-semibold text-gray-500 line-through">
                  ₹{singleProducts.MRP}
                </p>
                <p className="text-5xl font-bold">
                  ₹{singleProducts.selectedPrice.price}
                </p>
              </div>
              <div>
                <p>{singleProducts.description}</p>
              </div>
              <div className="flex flex-col gap-1 mt-8">
                <label>
                  <Text size="4" weight="bold">
                    Select your size
                  </Text>
                </label>
                <div className="flex gap-2 mt-2">
                  {singleProducts.allPrice.map((i) => (
                    <Badge
                      variant={
                        i.size == singleProducts.selectedPrice.size
                          ? "solid"
                          : "outline"
                      }
                      size="2"
                      role="button"
                      onClick={() => handelSizeSelect(i)}
                    >
                      {i.size}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label>
                  <Text size="4" weight="bold">
                    Select your color
                  </Text>
                </label>
                <div className="flex gap-2 mt-2">
                  {singleProducts.allColors.map((i) => (
                    <Badge
                      variant={
                        i.color == singleProducts.selectedColor.color
                          ? "solid"
                          : "outline"
                      }
                      size="2"
                      role="button"
                      color={i.color.toLowerCase()}
                      onClick={() => handelColorSelect(i)}
                    >
                      {i.color}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2 mt-16 max-lg:w-full max-lg:flex-col max-lg:mt-10">
                <Button
                  variant="outline"
                  size="4"
                  className="max-lg:w-full"
                  onClick={() =>
                    addToCart(
                      singleProducts.id,
                      singleProducts,
                      singleProducts.selectedColor.color,
                      singleProducts.selectedColor.image,
                      singleProducts.selectedPrice.price,
                      singleProducts.selectedPrice.size
                    )
                  }
                >
                  Add to cart
                </Button>
                <Button
                  size="4"
                  className="w-64 max-lg:w-full"
                  onClick={() =>
                    handleBuyNow(
                      singleProducts,
                      singleProducts.selectedColor.color,
                      singleProducts.selectedColor.image,
                      singleProducts.selectedPrice.price,
                      singleProducts.selectedPrice.size
                    )
                  }
                >
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
