import { useState, useMemo } from "react";
import { Camera, Search, Maximize2, X, Calendar, User, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import SEO from "@/components/common/SEO";

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  category: string;
  altText: string;
  image: string;
  featured: boolean;
  serviceLink: string;
  dateAdded: string;
  metadata: {
    serviceType: string;
    styleLength?: string;
    hairTexture?: string;
    keywords: string[];
  };
  testimonial?: {
    name: string;
    text: string;
  };
  isTransformation?: boolean;
  transformationDetails?: {
    before: string;
    after: string;
    summary: string;
    timeRequired: string;
    service: string;
  };
}

const galleryData: GalleryItem[] = [
  {
    id: 1,
    title: "Medium Knotless Braids with Curly Ends",
    description: "Lightweight knotless braids with beautifully curled ends for a soft, feminine finish.",
    category: "Knotless Braids",
    altText: "Medium knotless braids hairstyle completed at Lovet's Locs and Braids in West Roxbury MA",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1d0a04bd-9c73-4aa9-87e7-0f62976e3323/medium-knotless-braids-with-curly-ends-160f72d0-1782003938853.webp",
    featured: true,
    serviceLink: "/services#braids",
    dateAdded: "2024-03-15",
    metadata: {
      serviceType: "Braiding",
      styleLength: "Mid-back",
      hairTexture: "4C",
      keywords: ["knotless braids", "curly ends", "protective style"]
    },
    testimonial: {
      name: "Sarah",
      text: "The best knotless braids I've ever had! So light and neat."
    }
  },
  {
    id: 2,
    title: "Jumbo Box Braids with Jewelry",
    description: "Bold jumbo box braids accented with gold hair jewelry for a royal look.",
    category: "Box Braids",
    altText: "Jumbo box braids with gold jewelry at Lovet's Locs and Braids Boston",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1d0a04bd-9c73-4aa9-87e7-0f62976e3323/jumbo-box-braids-with-jewelry-4f425e52-1782003939257.webp",
    featured: false,
    serviceLink: "/services#braids",
    dateAdded: "2024-03-14",
    metadata: {
      serviceType: "Braiding",
      styleLength: "Waist length",
      keywords: ["box braids", "jumbo braids", "hair jewelry"]
    }
  },
  {
    id: 3,
    title: "Goddess Braids with Wavy Ends",
    description: "Beautiful goddess braids with flowing wavy ends for a bohemian aesthetic.",
    category: "Goddess Braids",
    altText: "Goddess braids with wavy ends by professional stylist in West Roxbury",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1d0a04bd-9c73-4aa9-87e7-0f62976e3323/goddess-braids-with-wavy-ends-d458fede-1782003939029.webp",
    featured: true,
    serviceLink: "/services#braids",
    dateAdded: "2024-03-13",
    metadata: {
      serviceType: "Braiding",
      styleLength: "Long",
      keywords: ["goddess braids", "boho braids", "wavy hair"]
    }
  },
  {
    id: 4,
    title: "Custom Design Cornrows",
    description: "Intricate geometric cornrow patterns with heart-shaped details.",
    category: "Cornrows",
    altText: "Heart design cornrows West Roxbury hair braiding",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1d0a04bd-9c73-4aa9-87e7-0f62976e3323/custom-design-cornrows-d6c9a5f9-1782003939057.webp",
    featured: false,
    serviceLink: "/services#braids",
    dateAdded: "2024-03-12",
    metadata: {
      serviceType: "Braiding",
      keywords: ["cornrows", "hair design", "creative braids"]
    }
  },
  {
    id: 5,
    title: "Sleek Feed-In Braids Ponytail",
    description: "Flawless feed-in braids styled into a high, sleek ponytail.",
    category: "Feed-In Braids",
    altText: "High ponytail feed-in braids Boston hair salon",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1d0a04bd-9c73-4aa9-87e7-0f62976e3323/sleek-feed-in-braids-ponytail-82cfd499-1782003939326.webp",
    featured: true,
    serviceLink: "/services#braids",
    dateAdded: "2024-03-11",
    metadata: {
      serviceType: "Braiding",
      keywords: ["feed-in braids", "ponytail", "sleek hair"]
    }
  },
  {
    id: 6,
    title: "Clean Stitch Braids",
    description: "Perfectly partitioned stitch braids for a sharp and modern look.",
    category: "Stitch Braids",
    altText: "Neat stitch braids hairstyle West Roxbury MA",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1d0a04bd-9c73-4aa9-87e7-0f62976e3323/clean-stitch-braids-d0423768-1782003938687.webp",
    featured: false,
    serviceLink: "/services#braids",
    dateAdded: "2024-03-10",
    metadata: {
      serviceType: "Braiding",
      keywords: ["stitch braids", "neat parts", "braid maintenance"]
    }
  },
  {
    id: 7,
    title: "Professional Loc Retwist",
    description: "Expert loc maintenance and retwist for healthy, growing locs.",
    category: "Loc Retwist",
    altText: "Professional loc retwist service West Roxbury",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1d0a04bd-9c73-4aa9-87e7-0f62976e3323/professional-loc-retwist-799a13b3-1782003938871.webp",
    featured: true,
    serviceLink: "/services#locs",
    dateAdded: "2024-03-09",
    metadata: {
      serviceType: "Loc Maintenance",
      keywords: ["loc retwist", "dreadlocks", "loc styling"]
    },
    testimonial: {
      name: "Marcus",
      text: "Lovet really knows how to take care of locs. My retwist is always perfect."
    }
  },
  {
    id: 8,
    title: "Fresh Starter Locs",
    description: "The beginning of a beautiful journey with neat, uniform starter locs.",
    category: "Starter Locs",
    altText: "Starter locs installation West Roxbury MA",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1d0a04bd-9c73-4aa9-87e7-0f62976e3323/fresh-starter-locs-5387cbef-1782003939645.webp",
    featured: false,
    serviceLink: "/services#locs",
    dateAdded: "2024-03-08",
    metadata: {
      serviceType: "Loc Installation",
      keywords: ["starter locs", "loc journey", "comb coils"]
    }
  },
  {
    id: 9,
    title: "Bohemian Faux Locs",
    description: "Long, distressed faux locs with curly tendrils for a natural appearance.",
    category: "Faux Locs",
    altText: "Bohemian faux locs West Roxbury hair salon",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1d0a04bd-9c73-4aa9-87e7-0f62976e3323/bohemian-faux-locs-ea54c79c-1782003939644.webp",
    featured: true,
    serviceLink: "/services#locs",
    dateAdded: "2024-03-07",
    metadata: {
      serviceType: "Locs",
      styleLength: "Waist length",
      keywords: ["faux locs", "boho locs", "distressed locs"]
    }
  },
  {
    id: 10,
    title: "Kids Heart Braids with Beads",
    description: "Creative heart-patterned braids with colorful beads for kids.",
    category: "Kids Hairstyles",
    altText: "Kids braided hairstyle with beads West Roxbury",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1d0a04bd-9c73-4aa9-87e7-0f62976e3323/kids-heart-braids-with-beads-647a0411-1782003939822.webp",
    featured: false,
    serviceLink: "/services",
    dateAdded: "2024-03-06",
    metadata: {
      serviceType: "Kids Styling",
      keywords: ["kids braids", "hair beads", "heart braids"]
    }
  },
  {
    id: 11,
    title: "Men's Box Braids with Fade",
    description: "Clean men's box braids paired with a sharp side fade.",
    category: "Men's Braids",
    altText: "Men's box braids with fade West Roxbury",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1d0a04bd-9c73-4aa9-87e7-0f62976e3323/men-s-box-braids-with-fade-3ad9053f-1782003939952.webp",
    featured: true,
    serviceLink: "/services",
    dateAdded: "2024-03-05",
    metadata: {
      serviceType: "Men's Styling",
      keywords: ["men's braids", "fade and braids", "masculine styles"]
    }
  },
  {
    id: 12,
    title: "Protective Twist Updo",
    description: "Elegant twisted updo designed for long-term protection and style.",
    category: "Protective Styles",
    altText: "Protective twist updo West Roxbury Boston",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1d0a04bd-9c73-4aa9-87e7-0f62976e3323/protective-twist-updo-1d183309-1782003939658.webp",
    featured: false,
    serviceLink: "/services",
    dateAdded: "2024-03-04",
    metadata: {
      serviceType: "Natural Hair Care",
      keywords: ["twists", "updo", "protective styling"]
    }
  },
  {
    id: 13,
    title: "Bridal Braided Updo",
    description: "Sophisticated braided updo for weddings and special occasions.",
    category: "Special Occasion Styles",
    altText: "Bridal braided hairstyle West Roxbury salon",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1d0a04bd-9c73-4aa9-87e7-0f62976e3323/bridal-braided-updo-85d570ae-1782003939966.webp",
    featured: true,
    serviceLink: "/services",
    dateAdded: "2024-03-03",
    metadata: {
      serviceType: "Special Styling",
      keywords: ["bridal hair", "wedding braids", "formal updo"]
    }
  },
  {
    id: 14,
    title: "Knotless Braids Transformation",
    description: "Incredible transformation from natural hair to stunning knotless braids.",
    category: "Before & After",
    altText: "Knotless braids before and after West Roxbury",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1d0a04bd-9c73-4aa9-87e7-0f62976e3323/knotless-braids-transformation-e61be73e-1782003940451.webp",
    featured: true,
    serviceLink: "/services#braids",
    dateAdded: "2024-03-02",
    isTransformation: true,
    transformationDetails: {
      before: "Natural 4C hair, dry state",
      after: "Medium knotless braids with curly ends",
      summary: "Full hydration treatment followed by precision knotless braiding.",
      timeRequired: "6 hours",
      service: "Knotless Braids + Treatment"
    },
    metadata: {
      serviceType: "Transformation",
      keywords: ["before and after", "hair transformation", "knotless braids"]
    }
  },
  {
    id: 15,
    title: "Loc Retwist Transformation",
    description: "Total refresh of mature locs with deep cleaning and precision retwist.",
    category: "Before & After",
    altText: "Loc retwist before and after West Roxbury salon",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1d0a04bd-9c73-4aa9-87e7-0f62976e3323/loc-retwist-transformation-5b4dc752-1782003939998.webp",
    featured: true,
    serviceLink: "/services#locs",
    dateAdded: "2024-03-01",
    isTransformation: true,
    transformationDetails: {
      before: "Fuzzy overgrown locs, 3 months since last retwist",
      after: "Cleanly parted and palm-rolled locs",
      summary: "Loc detox followed by professional retwist and styling.",
      timeRequired: "3 hours",
      service: "Loc Retwist + Detox"
    },
    metadata: {
      serviceType: "Transformation",
      keywords: ["loc transformation", "dreadlocks", "retwist"]
    }
  },
  {
    id: 16,
    title: "Detailed Micro Braids",
    description: "Exquisite micro braids for a timeless and versatile look.",
    category: "Knotless Braids",
    altText: "Micro braids hairstyle West Roxbury MA",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1d0a04bd-9c73-4aa9-87e7-0f62976e3323/detailed-micro-braids-a71a0077-1782003940423.webp",
    featured: false,
    serviceLink: "/services#braids",
    dateAdded: "2024-02-28",
    metadata: {
      serviceType: "Braiding",
      styleLength: "Extra long",
      keywords: ["micro braids", "small braids", "long braids"]
    }
  },
  {
    id: 17,
    title: "Butterfly Locs Style",
    description: "Trendy distressed locs with a unique butterfly texture.",
    category: "Faux Locs",
    altText: "Butterfly locs West Roxbury hair styling",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1d0a04bd-9c73-4aa9-87e7-0f62976e3323/butterfly-locs-style-5f094198-1782003941832.webp",
    featured: true,
    serviceLink: "/services#locs",
    dateAdded: "2024-02-27",
    metadata: {
      serviceType: "Locs",
      keywords: ["butterfly locs", "distressed locs", "trendy hair"]
    }
  },
  {
    id: 18,
    title: "Creative Kids Cornrows",
    description: "Fun and durable zigzag cornrows for active kids.",
    category: "Kids Hairstyles",
    altText: "Creative kids braids West Roxbury Boston",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1d0a04bd-9c73-4aa9-87e7-0f62976e3323/creative-kids-cornrows-9a411e9b-1782003942057.webp",
    featured: false,
    serviceLink: "/services",
    dateAdded: "2024-02-26",
    metadata: {
      serviceType: "Kids Styling",
      keywords: ["kids cornrows", "zigzag braids", "durable braids"]
    }
  },
  {
    id: 19,
    title: "Geometric Men's Braids",
    description: "Sharp geometric cornrows for men, emphasizing clean lines.",
    category: "Men's Braids",
    altText: "Geometric men's cornrows West Roxbury",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1d0a04bd-9c73-4aa9-87e7-0f62976e3323/geometric-men-s-braids-e2945a6d-1782003941174.webp",
    featured: false,
    serviceLink: "/services",
    dateAdded: "2024-02-25",
    metadata: {
      serviceType: "Men's Styling",
      keywords: ["men's braids", "geometric hair", "cornrows"]
    }
  },
  {
    id: 20,
    title: "Bouncy Passion Twists",
    description: "Soft, springy passion twists for a lightweight natural look.",
    category: "Protective Styles",
    altText: "Passion twists West Roxbury MA",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1d0a04bd-9c73-4aa9-87e7-0f62976e3323/bouncy-passion-twists-3d804d9a-1782003941907.webp",
    featured: true,
    serviceLink: "/services#care",
    dateAdded: "2024-02-24",
    metadata: {
      serviceType: "Twists",
      keywords: ["passion twists", "spring twists", "bouncy hair"]
    }
  },
  {
    id: 21,
    title: "Intricate Long Twisted Dreadlocks",
    description: "Exquisite long twisted dreadlocks featuring neat, square-shaped partings for a clean and professional finish.",
    category: "Loc Retwist",
    altText: "Long twisted dreadlocks with neat partings at Lovet's Locs and Braids in West Roxbury MA",
    image: "https://storage.googleapis.com/dala-prod-public-storage/attachments/176895b1-f89a-4fe0-811c-90aa65760d48/1782119267579_FB_IMG_1782119178589.jpg",
    featured: true,
    serviceLink: "/services#locs",
    dateAdded: "2026-06-22",
    metadata: {
      serviceType: "Locs",
      styleLength: "Long",
      hairTexture: "4C",
      keywords: ["twisted dreadlocks", "loc retwist", "neat partings", "protective style"]
    }
  },
  {
    id: 22,
    title: "Elite Knotless Braiding Session",
    description: "A showcase of precision and care during a professional braiding session, ensuring comfort and style.",
    category: "Knotless Braids",
    altText: "Professional knotless braiding session at Lovet's Locs and Braids West Roxbury Boston",
    image: "https://storage.googleapis.com/dala-prod-public-storage/attachments/176895b1-f89a-4fe0-811c-90aa65760d48/1782119267628_FB_IMG_1782119173823.jpg",
    featured: true,
    serviceLink: "/services#braids",
    dateAdded: "2026-06-22",
    metadata: {
      serviceType: "Braiding",
      keywords: ["knotless braids", "braiding session", "professional braiding"]
    }
  },
  {
    id: 23,
    title: "Sleek Side Profile Protective Style",
    description: "Elegant side profile highlighting the intricate details of a fresh protective braid style.",
    category: "Protective Styles",
    altText: "Sleek side profile protective braid style at Lovet's Locs and Braids West Roxbury MA",
    image: "https://storage.googleapis.com/dala-prod-public-storage/attachments/176895b1-f89a-4fe0-811c-90aa65760d48/1782119267630_FB_IMG_1782119168589.jpg",
    featured: true,
    serviceLink: "/services#care",
    dateAdded: "2026-06-22",
    metadata: {
      serviceType: "Protective Styling",
      keywords: ["protective style", "side profile braids", "sleek braids"]
    }
  }
];

const categories = [
  "All",
  "Knotless Braids",
  "Box Braids",
  "Goddess Braids",
  "Cornrows",
  "Feed-In Braids",
  "Stitch Braids",
  "Loc Retwist",
  "Starter Locs",
  "Faux Locs",
  "Kids Hairstyles",
  "Men's Braids",
  "Protective Styles",
  "Special Occasion Styles",
  "Before & After"
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [visibleItems, setVisibleItems] = useState(12);

  const filteredData = useMemo(() => {
    return galleryData.filter(item => {
      const matchesCategory = activeCategory === "All" || item.category === activeCategory;
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           item.metadata.keywords.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const displayedItems = filteredData.slice(0, visibleItems);

  const loadMore = () => setVisibleItems(prev => prev + 8);

  const openLightbox = (item: GalleryItem) => setSelectedItem(item);
  const closeLightbox = () => setSelectedItem(null);

  const gallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Lovet's Locs and Braids Hairstyle Gallery",
    "description": "Portfolio of hair braiding, locs, and natural styling by Lovet's Locs and Braids in West Roxbury, MA.",
    "image": galleryData.map(item => item.image),
    "author": {
      "@type": "LocalBusiness",
      "name": "Lovet's Locs and Braids"
    }
  };

  return (
    <div className="pt-24 bg-white min-h-screen">
      <SEO 
        title="Hair Braiding Gallery | Boston Braids and Loc Transformations"
        description="View our stunning portfolio of professional knotless braids, locs, and protective hairstyles completed at Lovet’s Locs and Braids in West Roxbury, Boston MA."
        url="https://lovetslocsandbraids.com/gallery"
        schema={gallerySchema}
        image={galleryData[0].image}
      />

      <section className="bg-slate-950 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 flex items-center justify-center">
              <Camera className="mr-4 h-12 w-12 text-purple-500" /> 
              The <span className="text-purple-500 ml-3">Portfolio</span>
            </h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Real transformations, real clients, real beauty. Browse our latest work from the salon floor.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Search and Filter Controls */}
        <div className="flex flex-col space-y-8 mb-16">
          <div className="relative max-w-2xl mx-auto w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5" />
            <Input 
              placeholder="Search by hairstyle, style or keyword..." 
              className="pl-12 h-14 rounded-2xl border-slate-200 shadow-sm focus:ring-purple-500 text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                onClick={() => {
                  setActiveCategory(cat);
                  setVisibleItems(12);
                }}
                className={`rounded-full px-6 transition-all ${
                  activeCategory === cat 
                  ? "bg-purple-600 text-white hover:bg-purple-700 shadow-md" 
                  : "hover:bg-purple-50 hover:text-purple-600 border-slate-200 text-slate-700"
                }`}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        {/* Masonry-like Grid */}
        <motion.div 
          layout
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
        >
          <AnimatePresence mode="popLayout">
            {displayedItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="break-inside-avoid group relative overflow-hidden rounded-3xl bg-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
                onClick={() => openLightbox(item)}
              >
                <img 
                  src={item.image} 
                  alt={item.altText} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110" 
                  loading="lazy" 
                />
                
                {item.isTransformation && (
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-purple-600/90 text-white backdrop-blur-sm border-none px-3 py-1 uppercase tracking-wider text-[10px] font-bold">
                      Transformation
                    </Badge>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <span className="text-purple-400 text-xs font-bold uppercase tracking-widest mb-2">{item.category}</span>
                  <h3 className="text-white font-bold text-xl mb-3 leading-tight">{item.title}</h3>
                  <div className="flex items-center text-white/80 text-sm gap-4">
                    <span className="flex items-center"><Calendar className="h-3 w-3 mr-1" /> {item.dateAdded}</span>
                    <span className="flex items-center"><Maximize2 className="h-3 w-3 mr-1" /> View Details</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredData.length === 0 && (
          <div className="text-center py-32">
            <Info className="h-16 w-16 text-slate-300 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-slate-900 mb-2">No styles found</h3>
            <p className="text-slate-500">Try adjusting your search or category filter.</p>
          </div>
        )}

        {visibleItems < filteredData.length && (
          <div className="mt-16 text-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-slate-200 text-slate-900 rounded-2xl px-12 h-14 font-bold hover:bg-slate-50"
              onClick={loadMore}
            >
              Load More Styles
            </Button>
          </div>
        )}

        {/* Lightbox / Modal */}
        <AnimatePresence>
          {selectedItem && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-slate-950/95 backdrop-blur-md">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-6xl max-h-full bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row"
              >
                <button 
                  onClick={closeLightbox}
                  className="absolute top-6 right-6 z-20 p-3 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full transition-colors text-white lg:text-slate-900 lg:bg-slate-100 lg:hover:bg-slate-200"
                >
                  <X className="h-6 w-6" />
                </button>

                <div className="lg:w-3/5 bg-slate-100 flex items-center justify-center overflow-hidden">
                  <img 
                    src={selectedItem.image} 
                    alt={selectedItem.altText} 
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="lg:w-2/5 p-8 md:p-12 overflow-y-auto">
                  <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100 border-none px-4 py-1 mb-6 text-sm font-bold uppercase tracking-wider">
                    {selectedItem.category}
                  </Badge>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4 leading-tight">{selectedItem.title}</h2>
                  <p className="text-slate-600 mb-8 text-lg leading-relaxed">{selectedItem.description}</p>

                  {selectedItem.isTransformation && selectedItem.transformationDetails && (
                    <div className="space-y-6 mb-8 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-purple-100 rounded-lg"><User className="h-5 w-5 text-purple-600" /></div>
                        <div>
                          <h4 className="font-bold text-slate-900">Before</h4>
                          <p className="text-sm text-slate-600">{selectedItem.transformationDetails.before}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-green-100 rounded-lg"><Camera className="h-5 w-5 text-green-600" /></div>
                        <div>
                          <h4 className="font-bold text-slate-900">After</h4>
                          <p className="text-sm text-slate-600">{selectedItem.transformationDetails.after}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-blue-100 rounded-lg"><Calendar className="h-5 w-5 text-blue-600" /></div>
                        <div>
                          <h4 className="font-bold text-slate-900">Summary</h4>
                          <p className="text-sm text-slate-600">{selectedItem.transformationDetails.summary}</p>
                          <p className="text-xs text-slate-400 mt-1">Time: {selectedItem.transformationDetails.timeRequired}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedItem.testimonial && (
                    <div className="mb-8 border-l-4 border-purple-500 pl-6 italic text-slate-700 bg-purple-50/50 py-4 pr-4 rounded-r-xl">
                      "{selectedItem.testimonial.text}"
                      <p className="mt-2 text-sm font-bold text-purple-600 non-italic">— {selectedItem.testimonial.name}</p>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="flex-grow bg-purple-600 hover:bg-purple-700 text-white h-14 rounded-xl font-bold text-lg" asChild>
                      <Link to="/booking">Book This Style</Link>
                    </Button>
                    <Button variant="outline" className="flex-grow border-slate-200 h-14 rounded-xl font-bold text-lg text-slate-900" asChild>
                      <Link to={selectedItem.serviceLink}>View Service Details</Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <section className="mt-32 py-20 bg-slate-900 rounded-[3rem] p-8 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 rounded-full blur-[100px] -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px] -ml-32 -mb-32"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready for your transformation?</h2>
            <p className="text-slate-400 mb-10 max-w-2xl mx-auto text-lg">Join the hundreds of satisfied clients who trust Lovet's with their natural hair. Our elite stylists are ready to give you the look you've always wanted.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 px-12 py-8 text-xl rounded-2xl shadow-xl shadow-purple-900/20" asChild>
                <Link to="/booking">Book Your Session Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-slate-700 text-white hover:bg-slate-800 px-12 py-8 text-xl rounded-2xl" asChild>
                <Link to="/contact">Contact Our Team</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Gallery;