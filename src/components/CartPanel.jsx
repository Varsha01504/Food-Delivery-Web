export default function CartPanel({
    isOpen,
    onClose,
    cart,
    removeFromCart,
    totalPrice
}) {
    return (
        <>
            {/* BACKDROP */}
            <div
                onClick={onClose}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100vh",
                    background: isOpen ? "rgba(0,0,0,0.5)" : "transparent",
                    opacity: isOpen ? 1 : 0,
                    pointerEvents: isOpen ? "auto" : "none",
                    transition: "0.3s",
                    zIndex: 999,
                }}
            />

            {/* PANEL */}
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    right: 0,
                    width: "350px",
                    height: "100vh",
                    background: "white",
                    transform: isOpen ? "translateX(0)" : "translateX(100%)",
                    transition: "0.3s ease",
                    zIndex: 1000,
                    padding: "20px",
                }}
            >
                <button onClick={onClose}>Close ✖</button>

                <h2>Your Cart 🛒</h2>

                {cart.length === 0 ? (
                    <p>Cart is empty 😭</p>
                ) : (
                    cart.map((item, index) => (
                        <div
                            key={index}
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginBottom: "10px",
                                borderBottom: "1px solid #eee",
                                paddingBottom: "10px",
                            }}
                        >
                            <div>
                                <p>{item.name}</p>
                                <small>
                                    ₹{item.price} × {item.qty}
                                </small>
                            </div>

                            <button
                                onClick={() => removeFromCart(index)}
                                style={{
                                    background: "red",
                                    color: "white",
                                    border: "none",
                                    padding: "5px",
                                    cursor: "pointer",
                                }}
                            >
                                X
                            </button>
                        </div>
                    ))
                )}

                {/* TOTAL */}
                <hr />
                <h3> Total: ₹{totalPrice}</h3>
            </div>
        </>
    );
}