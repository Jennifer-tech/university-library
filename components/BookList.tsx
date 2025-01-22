import React from "react";

interface Props {
  title: string;
  books: Book[];
  containerClassName?: string;
}

const BookList = ({ title, books, containerClassName }: Props) => {
  return (
    <section className={containerClassName}>
      <h2 className="font-bebas-neue text-light-100 text-4xl">{title}</h2>

      <ul className="book-list">
        {books.map((book)=> (

        ))}
      </ul>
    </section>
  );
};

export default BookList;
