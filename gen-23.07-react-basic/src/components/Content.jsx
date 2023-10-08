import Product from "./Product";

function Content() {
  return (
    <section
      id="Projects"
      className="w-fit mx-auto grid grid-cols-1 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
    >
      <Product />

      <Product />

      <Product />

      <Product />

      <Product />

      <Product />
    </section>
  );
}

export default Content;
