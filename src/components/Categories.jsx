import pizza from "../assets/pizza-logo.jpg";
import burger from "../assets/burger-logo.jpg";
import biryani from "../assets/biryani-logo.jpg";
import dessert from "../assets/dessert-logo.jpg";
import all from "../assets/food-logo.jpg";

export default function Categories({ setSelectedCategory }) {
    const categories = [
        { name: "All", image: all },
        { name: "Pizza", image: pizza },
        { name: "Burger", image: burger },
        { name: "Biryani", image: biryani },
        { name: "Dessert", image: dessert },
    ];

    const styles = {
        section: { padding: "40px" },

        grid: {
            display: "flex",
            gap: "15px",
            flexWrap: "wrap"
        },

        card: {
            padding: "15px",
            background: "#eee",
            borderRadius: "12px",
            textAlign: "center",
            width: "120px",
            cursor: "pointer",
            transition: "0.3s",
        },

        image: {
            width: "100%",
            height: "80px",
            objectFit: "cover",
            borderRadius: "8px",
            marginBottom: "8px"
        }
    };

    return (
        <section style={styles.section}>
            <h2>Food Categories</h2>

            <div style={styles.grid}>
                {categories.map((item) => (
                    <div
                        key={item.name}
                        style={styles.card}
                        onClick={() => setSelectedCategory(item.name)}
                    >
                        {item.image && (
                            <img
                                src={item.image}
                                alt={item.name}
                                style={styles.image}
                            />
                        )}

                        <p>{item.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}