"use client";
import React, { useEffect, useState } from "react";
import DomeGallery from "./DomeGallery";
import axios from "axios";

const Gallary = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [images, setImages] = useState([]); // FIX 1 → must be an ARRAY

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imageResponse = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/cars`
        );

        setFetchedData(imageResponse.data);

        // FIX 2 → convert API data to array of image objects
        const formattedImages = imageResponse.data.map((item, index) => ({
          src: item.cImg,
          alt: `car-${index}`,
        }));

        setImages(formattedImages);
      } catch (error) {
        console.error("Error fetching cars images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="mx-auto" style={{ width: "100vw", height: "91.5vh" }}>
      <DomeGallery images={images} /> {/* FIX 3 → now receives ARRAY */}
    </div>
  );
};

export default Gallary;
