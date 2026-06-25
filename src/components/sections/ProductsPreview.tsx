import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Star, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Lovet's Organic Shampoo",
    description: "Hydrating sulfate-free formula for all hair textures.",
    price: 24.99,
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1d0a04bd-9c73-4aa9-87e7-0f62976e3323/product-shampoo-0ce0defc-1776026558599.webp",
    rating: 5,
  },
  {
    id: 2,
    name: "Growth Booster Oil",
    description: "Infused with rosemary and castor oil for maximum growth.",
    price: 18.99,
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1d0a04bd-9c73-4aa9-87e7-0f62976e3323/product-oil-e7026cb7-1776026558512.webp",
    rating: 5,
  },
  {
    id: 3,
    name: "Deep Conditioning Mask",
    description: "Intense moisture for locs and natural curls.",
    price: 29.99,
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1d0a04bd-9c73-4aa9-87e7-0f62976e3323/product-conditioner-1c493551-1776026564129.webp",
    rating: 5,
  },
];

const ProductsPreview = () => {
  const addToCart = (product: string) => {
    toast.success(`${product} added to cart!`);
  };

  return (
    <div className="py-12">
      <div className="mb-12 flex flex-col items-center justify-between gap-6 md:flex-row">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Featured Products</h2>
          <p className="mt-2 text-slate-600">Premium organic care for your locs and braids.</p>
        </div>
        <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white" asChild>
          <Link to="/products">Shop All Products</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="group relative flex flex-col overflow-hidden rounded-xl bg-white p-4 shadow-lg"
          >
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <button className="absolute right-3 top-3 rounded-full bg-white/80 p-2 text-slate-400 backdrop-blur-sm transition-colors hover:text-red-500">
                <Heart className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-4 flex flex-grow flex-col">
              <div className="mb-1 flex">
                {[...Array(product.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <h3 className="text-lg font-bold text-slate-900">{product.name}</h3>
              <p className="mt-1 text-sm text-slate-500 line-clamp-2">{product.description}</p>
              
              <div className="mt-auto flex items-center justify-between pt-4">
                <span className="text-xl font-bold text-slate-900">${product.price}</span>
                <Button
                  onClick={() => addToCart(product.name)}
                  size="sm"
                  className="bg-slate-900 text-white hover:bg-purple-600"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPreview;