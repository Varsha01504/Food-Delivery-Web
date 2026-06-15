import logo from "../assets/logo.jpg";

export default function Navbar({ cartCount, onCartClick }) {
    return (
        <nav style={styles.nav}>
            <div style={styles.logoContainer}>
                <img src={logo} alt="Foodly Logo" style={styles.logoImg} />
                <h2 style={styles.logoText}>Foodly</h2>
            </div>

            <div style={styles.links}>
                <a href="#">Home</a>
                <a href="#">Menu</a>

                <span onClick={onCartClick} style={{ cursor: "pointer" }}>
                    Cart 🛒 ({cartCount})
                </span>
            </div>
        </nav>
    );
}

const styles = {
    nav: {
        display: "flex",
        justifyContent: "space-between",
        padding: "15px 30px",
        background: "#111",
        color: "white",
        alignItems: "center",
    },

    logoContainer: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
    },

    logoImg: {
        width: "35px",
        height: "35px",
        objectFit: "contain",
    },

    logoText: {
        margin: 0,
    },

    links: {
        display: "flex",
        gap: "20px",
    },
};
