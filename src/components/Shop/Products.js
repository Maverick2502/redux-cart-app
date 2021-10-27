import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  { id: "p1", price: 9.99, title: "Alchemy", description: "Just read it" },
  {
    id: "p3",
    price: 8.99,
    title: "Three comrades",
    description: "Just read it",
  },
  { id: "p4", price: 7.99, title: "1918", description: "Just read it" },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
