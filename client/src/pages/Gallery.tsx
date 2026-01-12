import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { useGalleryItems, useCreateGalleryItem } from "@/hooks/use-gallery";
import { motion } from "framer-motion";
import { Loader2, Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Gallery() {
  const { data: items, isLoading, error } = useGalleryItems();
  const createItem = useCreateGalleryItem();
  const [isOpen, setIsOpen] = useState(false);
  
  // Form state
  const [imageUrl, setImageUrl] = useState("");
  const [caption, setCaption] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createItem.mutateAsync({
        imageUrl,
        caption,
        altText: caption
      });
      setIsOpen(false);
      setImageUrl("");
      setCaption("");
    } catch (err) {
      console.error(err);
    }
  };

  // Combine static initial images with dynamic API data if API is empty for demo purposes, 
  // but strictly speaking we should trust the API. 
  // Let's assume the API returns what we need. 
  // If the API returns nothing, we can show a "No images yet" state, 
  // OR we can manually include the static files listed in the prompt as a fallback for the UI to look good initially.
  
  const staticImages = [
    { id: -1, imageUrl: "/images/JP 19.png", caption: "Putting for birdie" },
    { id: -2, imageUrl: "/images/JP 21.png", caption: "Team photo at the 18th" },
    { id: -3, imageUrl: "/images/JP 22.png", caption: "The winning drive" },
    { id: -4, imageUrl: "/images/JP 23.png", caption: "Lunch on the patio" },
    { id: -5, imageUrl: "/images/JP 24.png", caption: "Awards ceremony" },
    { id: -6, imageUrl: "/images/JP9.png", caption: "Starting the day" },
    { id: -7, imageUrl: "/images/JP10.png", caption: "Good times" },
    { id: -8, imageUrl: "/images/JP 7.png", caption: "On the green" },
    { id: -9, imageUrl: "/images/JP 14.png", caption: "Group shot" },
  ];

  const displayItems = (items && items.length > 0) ? items : staticImages;

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <PageHeader 
        title="Photo Gallery" 
        subtitle="Capturing the moments that matter."
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          
          {/* Admin-like capability to add photos (demo feature) */}
          <div className="flex justify-end mb-8">
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <Plus size={16} /> Add Photo
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add to Gallery</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="url">Image URL</Label>
                    <Input 
                      id="url" 
                      placeholder="/images/example.jpg" 
                      value={imageUrl} 
                      onChange={(e) => setImageUrl(e.target.value)}
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="caption">Caption</Label>
                    <Input 
                      id="caption" 
                      placeholder="Enter a caption..." 
                      value={caption} 
                      onChange={(e) => setCaption(e.target.value)}
                    />
                  </div>
                  <Button type="submit" disabled={createItem.isPending} className="w-full">
                    {createItem.isPending ? "Adding..." : "Add Photo"}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          {isLoading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="w-10 h-10 text-primary animate-spin" />
            </div>
          ) : error ? (
            <div className="text-center py-20 text-destructive">
              Failed to load gallery. Please try again later.
            </div>
          ) : (
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {displayItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="break-inside-avoid rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-card group relative"
                >
                  <img 
                    src={item.imageUrl} 
                    alt={item.caption || "Gallery image"} 
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  {item.caption && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <p className="text-white font-medium">{item.caption}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
