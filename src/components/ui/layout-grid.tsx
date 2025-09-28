"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Card = {
  id: number;
  className: string;
  type: string;
  thumbnail: string;
  images: string[]; // Array of additional imagesPath
  title: string;
  description: string;
  demoUrl?: string;
  techStack: string[];
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleSwipe = (direction: "left" | "right") => {
    if (selectedCard && selectedCard.images) {
      if (direction === "left") {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === 0 ? selectedCard.images.length - 1 : prevIndex - 1
        );
      } else if (direction === "right") {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === selectedCard.images.length - 1 ? 0 : prevIndex + 1
        );
      }
    }
  };

  const filteredCards = cards;
   
  return (
    <>
      {/* Grid Layout */}
      <div className="w-full p-10 grid grid-cols-1 md:grid-cols-3 max-w-7xl gap-4 relative">
        {filteredCards.map((card, i) => (
          <div
            key={i}
            className={cn(
              card.className,
              selectedCard?.id === card.id ? "backdrop-blur-sm" : ""
            )}
            onClick={() => {
              setSelectedCard(card);
              setCurrentImageIndex(0);
            }}
          >
            <motion.div
              className={cn(
                card.className,
                "relative overflow-hidden bg-white rounded-xl h-full w-full cursor-pointer"
              )}
              layoutId={`card-${card.id}`}
            >
              <ImageComponent card={card} />
              <div  className="bg-gray-300 text-white font-bold py-4 px-4 text-start text-md md:text-lg lg:text-xl flex justify-between ">
                {card.title}
                
           

<div className="flex items-center justify-between b ">
                    <div className="flex flex-col gap-2">
                    {Array.from({ length: Math.ceil(card.techStack.length / 2) }).map((_, rowIndex) => (
                      <div key={rowIndex} className="flex items-center gap-2">
                      {card.techStack.slice(rowIndex * 2, rowIndex * 2 + 2).map((icon, index) => (
                        <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        >
                        <Image src={icon} alt={`icon-${rowIndex}-${index}`} width={32} height={32} className="p-2" />
                        </div>
                      ))}
                      </div>
                    ))}
                    </div>

              </div> 
              </div>
            </motion.div>
          </div>
        ))}
      </div>
          
      {/* Modal */}
        {selectedCard && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-xl flex items-center justify-center z-15 overflow-scroll scrollbar-hide h-[100vh]  py-10"
            onClick={() => setSelectedCard(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
          className="bg-white rounded-lg p-6 max-w-lg w-full relative" // Added relative positioning
          layoutId={`card-${selectedCard.id}`}
          onClick={(e) => e.stopPropagation()}
            >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 z-50 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
            onClick={() => setSelectedCard(null)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          
          {selectedCard.images && selectedCard.images.length > 0 && (
              <div className="relative   ">
              <Image
            className="rounded-lg mt-10 block object-contain w-full h-auto max-h-[50vh] border-2  border-gray-200 transition bg-black bg-opacity-25"
            alt={`Image ${currentImageIndex + 1}`}
            src={selectedCard.images[currentImageIndex]}
            width={1080}
            height={2400}
            priority
            quality={100}
              />
              <div className="flex justify-center mt-2">
            {selectedCard.images.map((_, index) => (
            <div
              key={index}
              className={cn(
              "w-2 h-2 rounded-full mx-1 pt-1 transition duration-200",
              currentImageIndex === index
                ? "bg-black"
                : "bg-gray-400"
              )}
            ></div>
            ))}
              </div>
              <button
            className="absolute left-[-15px] top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
            onClick={(e) => {
            e.stopPropagation();
            handleSwipe("left");
            }}
              >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
            </svg>
              </button>
              <button
            className="absolute right-[-15px] z-50 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
            onClick={(e) => {
            e.stopPropagation();
            handleSwipe("right");
            }}
              >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
            </svg>
              </button>
              </div>
          )}
            <h2 className="text-2xl font-bold mb-2 mt-4">{selectedCard.title}</h2>
            <p className="text-gray-700 mb-4">{selectedCard.description}</p>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

const ImageComponent = ({ card }: { card: Card }) => {
  return (
    <motion.img
      layoutId={`image-${card.id}-image`}
      src={card.thumbnail}
      className={cn(
        "object-cover object-  inset-0 h-auto md:h-[350px] w-full transition duration-200"
      )}
      alt="thumbnail"
    />
  );
};