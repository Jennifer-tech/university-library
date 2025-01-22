import React from "react";
// import { Button } from "@/components/ui/button";
import BookOverview from "@/components/BookOverview";
import BookList from "@/components/BookList";
import { sampleBooks } from "@/constants";
// import Image from "next/image";

const Home = () => (
  <>
    <BookOverview {...sampleBooks[0]} />

    <BookList 
      title="Latest Books"
      books={sampleBooks}
      containerClassName="mt-28"
    />
  </>
);

export default Home;
