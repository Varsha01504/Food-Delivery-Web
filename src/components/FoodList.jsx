import pizza from "../assets/pizza.jpg";
import burger from "../assets/burger.jpg";
import biryani from "../assets/biryani.jpg";
import cake from "../assets/cake.jpg";

export default function FoodList({ addToCart, selectedCategory }) {
    const foods = [
        { name: "Margherita Pizza", price: 199, image: pizza, category: "Pizza" },
        { name: "Chicken Biryani", price: 249, image: biryani, category: "Biryani" },
        { name: "Veg Burger", price: 99, image: burger, category: "Burger" },
        { name: "Chocolate Cake", price: 149, image: cake, category: "Dessert" },
    ];

    const filteredFoods =
        selectedCategory === "All"
            ? foods
            : foods.filter((food) => food.category === selectedCategory);

    return (
        <section style={styles.section}>
            <h2>Popular Dishes</h2>

            <div style={styles.grid}>
                {filteredFoods.map((food) => (
                    <div key={food.name} style={styles.card}>

                        <img
                            src={food.image}
                            alt={food.name}
                            style={styles.image}
                        />

                        <h3>{food.name}</h3>
                        <p>₹{food.price}</p>

                        <button onClick={() => addToCart(food)}>
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}

const styles = {
    section: { padding: "40px" },
    grid: {
        display: "flex",
        gap: "20px",
        flexWrap: "wrap"
    },
    card: {
        padding: "15px",
        borderRadius: "12px",
        background: "#f5f5f5",
        width: "180px",
        textAlign: "center"
    },
    image: {
        width: "100%",
        height: "120px",
        objectFit: "cover",
        borderRadius: "10px",
        marginBottom: "10px"
    }
};