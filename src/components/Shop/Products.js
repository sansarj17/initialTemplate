import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
    let products = [
        {
            id: "p1",
            title: "Test01",
            price: 6,
            description: "Text Product 1",
        },
        {
            id: "p2",
            title: "Test02",
            price: 12,
            description: "Text Product 2",
        },
		{
            id: "p3",
            title: "Test03",
            price: 5,
            description: "Text Product 3",
        },
    ];

    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>
			{products.map((item,index) => 
                <ProductItem
					key={`${index}-${item.title.substr(0,6)}`}
                    item={item}
                />
				)}
            </ul>
        </section>
    );
};

export default Products;
