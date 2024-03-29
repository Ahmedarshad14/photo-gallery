"use client";
import Image from "next/image";
import { CldUploadButton } from "next-cloudinary";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

type UploadResult = {
  info: {
    public_id: string;
  };
  event: "success";
};

export default function Home() {
  const [imageId, setImageId] = useState('')
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CldUploadButton 
      onUpload={(results: UploadResult) => {
        setImageId(results.info.public_id)
      }}
      uploadPreset="mfxqsyiu" />
{imageId && (
      <CldImage
        width="960"
        height="600"
        src={imageId}
        sizes="100vw"
        alt="Description of my image"
      />
)}
    </main>
  );
}
