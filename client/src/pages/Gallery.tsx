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

import trophyImg from "@assets/ChatGPT_Image_Mar_8,_2026,_07_29_09_PM_1773071637027.png";
import swingImg from "@assets/ChatGPT_Image_Mar_8,_2026,_07_29_17_PM_1773071637027.png";
import celebrationImg from "@assets/Golfer's_winning_moment_in_anime_style_1773071637027.png";

export default function Gallery() {
  const { data: items, isLoading, error } = useGalleryItems();
  const createItem = useCreateGalleryItem();
  const [isOpen, setIsOpen] = useState(false);

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
    <div className="min-h-screen bg-[#f5f0e8]">
      <div className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#0d1f0f]">
        <div className="absolute inset-0 z-0 opacity-[0.04]" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }} />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-[#f5f0e8] mb-4"
          >
            Moments That Matter
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#f5f0e8]/70 text-lg md:text-xl max-w-2xl mx-auto font-body"
          >
            Capturing the spirit of the Jack Pitts Open through the years.
          </motion.p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-end mb-8">
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="gap-2 border-[#1a6b3a]/20 text-[#1a6b3a] hover:bg-[#1a6b3a]/5" data-testid="button-add-photo">
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
                      data-testid="input-image-url"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="caption">Caption</Label>
                    <Input
                      id="caption"
                      placeholder="Enter a caption..."
                      value={caption}
                      onChange={(e) => setCaption(e.target.value)}
                      data-testid="input-caption"
                    />
                  </div>
                  <Button type="submit" disabled={createItem.isPending} className="w-full bg-[#1a6b3a] hover:bg-[#1a6b3a]/90" data-testid="button-submit-photo">
                    {createItem.isPending ? "Adding..." : "Add Photo"}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          {isLoading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="w-10 h-10 text-[#1a6b3a] animate-spin" />
            </div>
          ) : error ? (
            <div className="text-center py-20 text-destructive font-body">
              Failed to load gallery. Please try again later.
            </div>
          ) : (
            <>
              <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {displayItems.map((item, idx) => (
                  <>
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="break-inside-avoid rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white group relative"
                      data-testid={`gallery-item-${item.id}`}
                    >
                      <img
                        src={item.imageUrl}
                        alt={item.caption || "Gallery image"}
                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      {item.caption && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                          <p className="text-white font-body font-medium">{item.caption}</p>
                        </div>
                      )}
                    </motion.div>
                    {idx === 2 && (
                      <div key="deco-1" className="break-inside-avoid flex justify-center py-6">
                        <img src={swingImg} alt="" className="w-32 opacity-[0.08]" />
                      </div>
                    )}
                    {idx === 5 && (
                      <div key="deco-2" className="break-inside-avoid flex justify-center py-6">
                        <img src={celebrationImg} alt="" className="w-32 opacity-[0.08]" />
                      </div>
                    )}
                  </>
                ))}
              </div>
              <div className="flex justify-center py-12 opacity-[0.06]">
                <img src={trophyImg} alt="" className="w-40" />
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
