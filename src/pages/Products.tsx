import { useState } from "react";
import { ShoppingCart, Star, Filter, Heart, Eye } from \"lucide-react\";
import { Button } from \"@/components/ui/button\";
import { toast } from \"sonner\";
import SEO from \"@/components/common/SEO\";

const products = [
  {
    id: 1,
    name: "Lovet's Organic Hair Oil",
    category: "Oils",
    price: 18.99,
    rating: 5,
    reviews: 124,
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1d0a04bd-9c73-4aa9-87e7-0f62976e3323/product-oil-e7026cb7-1776026558512.webp",
    desc: "Our best-selling growth booster oil. Promotes thickness and scalp health."
  },
  {
    id: 2,
    name: "Clarifying Organic Shampoo",
    category: "Cleanse",
    price: 24.99,
    rating: 5,
    reviews: 89,
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1d0a04bd-9c73-4aa9-87e7-0f62976e3323/product-shampoo-0ce0defc-1776026558599.webp",
    desc: "Deep clean without stripping moisture. Perfect for locs and protective styles."
  },
  {
    id: 3,
    name: "Shea Butter Deep Conditioner",
    category: "Moisture",
    price: 29.99,
    rating: 5,
    reviews: 56,
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1d0a04bd-9c73-4aa9-87e7-0f62976e3323/product-conditioner-1c493551-1776026564129.webp",
    desc: "Intense repair for damaged hair. Leave-in or rinse-out versatile formula."
  },
  {
    id: 4,
    name: "Edge Control Tamer",
    category: "Styling",
    price: 14.99,
    rating: 4,
    reviews: 210,
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1d0a04bd-9c73-4aa9-87e7-0f62976e3323/product-oil-e7026cb7-1776026558512.webp",
    desc: "Long-lasting hold without the flakes. Keep your edges laid and slayed."
  }
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-slate-900 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Lovet’s <span className="text-purple-400">Organic Care</span></h1>
const Products = () => {
  return (
    <div className=\"pt-24 min-h-screen bg-white\">
      <SEO 
        title=\"Organic Hair Care Products | Lovet’s Locs and Braids Boston\"
        description=\"Shop our exclusive range of organic hair care products at Lovet’s Locs and Braids. Best shampoos and oils for braids and locs in Boston, MA.\"
        url=\"https://lovetslocsandbraids.com/products\"
      />
      {/* Hero Section */}
      <section className=\"bg-slate-900 py-16 text-white text-center\">
        <div className=\"container mx-auto px-4 md:px-6\">
          {/* Sidebar Filters */}
          <aside className="lg:w-1/4">
            <div className="bg-white p-6 rounded-2xl shadow-sm space-y-8 sticky top-28">
              <div>
                <h3 className="text-lg font-bold mb-4 flex items-center"><Filter className="mr-2 h-5 w-5" /> Categories</h3>
                <div className="space-y-2">
                  {["All", "Oils", "Cleanse", "Moisture", "Styling"].map(cat => (
                    <button 
                      key={cat} 
                      onClick={() => setActiveCategory(cat)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${activeCategory === cat ? 'bg-purple-600 text-white font-bold' : 'hover:bg-slate-100 text-slate-600'}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-purple-900 rounded-xl p-6 text-white">
                <h4 className="font-bold mb-2">Exclusive Offer!</h4>
                <p className="text-sm opacity-80 mb-4">Buy 3 products and get a free scalp massager!</p>
                <Button className="w-full bg-white text-purple-900 hover:bg-slate-100 font-bold">Claim Now</Button>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map(product => (
                <div key={product.id} className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col">
                  <div className="relative aspect-square overflow-hidden">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="bg-white p-2 rounded-full shadow-lg text-slate-600 hover:text-red-500 transition-colors"><Heart className="h-5 w-5" /></button>
                      <button className="bg-white p-2 rounded-full shadow-lg text-slate-600 hover:text-purple-600 transition-colors"><Eye className="h-5 w-5" /></button>
                    </div>
                    {product.reviews > 100 && <span className="absolute top-4 left-4 bg-purple-600 text-white text-[10px] font-bold px-2 py-1 rounded">BEST SELLER</span>}
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < product.rating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-200'}`} />
                      ))}
                      <span className="text-xs text-slate-400 ml-2">({product.reviews})</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-slate-900">{product.name}</h3>
                    <p className="text-sm text-slate-500 mb-4 line-clamp-2">{product.desc}</p>
                    <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
                      <span className="text-2xl font-bold text-slate-900">${product.price}</span>
                      <Button onClick={() => toast.success("Added to cart!")} className="bg-slate-900 hover:bg-purple-600"><ShoppingCart className="mr-2 h-4 w-4" /> Buy</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="py-20 text-center">
                 <h3 className="text-2xl font-bold text-slate-400">No products found in this category.</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;