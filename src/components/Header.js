import React from "react";

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>📍 Driver Map Dashboard</h1>
      <p style={styles.subtitle}>Recent coordinates from active drivers</p>
    </header>
  );
};

const styles = {
  header: {
    background: "linear-gradient(90deg, #4CAF50, #2196F3)", // Gradient background
    color: "white", // Text color
    padding: "20px 10px", // Padding
    textAlign: "center", // Centered text
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Drop shadow for depth
    borderRadius: "10px", // Rounded corners
  },
  title: {
    fontSize: "2.5rem", // Larger font size for title
    margin: "0", // Remove default margin
    fontWeight: "bold", // Bold font
    fontFamily: "'Roboto', sans-serif", // Modern font
  },
  subtitle: {
    fontSize: "1.2rem", // Smaller font for subtitle
    margin: "0", // Remove default margin
    marginTop: "10px", // Add some spacing below the title
    fontFamily: "'Roboto', sans-serif", // Consistent font
    opacity: 0.9, // Slightly faded effect
  },
};

export default Header;
