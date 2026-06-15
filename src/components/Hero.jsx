export default function Hero() {
    return (
        <section style={styles.hero}>
            <h1>Hungry? We got you! 🌮</h1>
            <p>Order delicious food from your favorite restaurants instantly</p>
            <button>Explore Menu</button>
        </section>
    );
}

const styles = {
    hero: {
        textAlign: "center",
        padding: "100px 20px",
        background: "linear-gradient(135deg, #ffffff, #f3f3f3)",
    },
};