import React from "react";
import ReactDom from "react-dom";
// CSS
import "./index.css";
//Variables
const firstBook = {
  img: "https://images-eu.ssl-images-amazon.com/images/I/61JSKZ6vHQS._AC_UL200_SR200,200_.jpg",
  title: "Midnight Library",
  author: "Matt Haig",
};

const secondBook = {
  img: "https://images-eu.ssl-images-amazon.com/images/I/51eL8VHhDkS._SX218_BO1,204,203,200_QL40_ML2_.jpg",
  title: "Janes Patiserrie",
  author: "Jane Dunn",
};

const thirdBook = {
  img: "https://images-eu.ssl-images-amazon.com/images/I/51zRqbM6kRL._SY291_BO1,204,203,200_QL40_ML2_.jpg",
  title: "Murder Club",
  author: "Richard Osman",
};

function BookList() {
  return (
    <section className="booklist">
      <Book title={firstBook.title} img={firstBook.img} author={firstBook.author}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempora?</p>
      </Book>
      <Book title={secondBook.title} img={secondBook.img} author={secondBook.author} />
      <Book title={thirdBook.title} img={thirdBook.img} author={thirdBook.author} />
    </section>
  );
}

const Book = ({ img, title, author, children }) => {
  // const { img, title, author } = props; <-- (_other example of destructuring_)
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4 style={{ color: "#617d98", fontSize: "0.75rem" }}>{author}</h4>
      {children}
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
