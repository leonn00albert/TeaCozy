import { Card } from "react-bootstrap";

export const Locations = () => {
  const createCard = (title, address, details, city) => {
    return { title, address, details, city };
  };

  const cards = [
    createCard("Downtown", "384 West 4th St", "Suite 108", "Portland Maine"),
    createCard(
      "East Bayside",
      `3433 Phisherman 's Avenue`,
      "(Northwest Corner)",
      "Portland Maine"
    ),
    createCard(
      "Oakdale",
      "515 Cresent Avenue",
      "Second Floor",
      "Portland Maine"
    ),
  ];

  const imgSrc = "img/img-locations-background.jpg ";
  const imgAlt = "Background";
  const styles = {
    height: "500px",
    width: "1200px",
    backgroundImage: `url(${imgSrc})`,
    cardStyles: {
      width: "300px",
      backgroundColor: "black",
      opacity: "1",
      height: "300px",
    },
  };
  return (
    <section id='locations' className="hero-section" style={styles}>
        <div>
        <h2 style={{marginBottom: '15px'}}> Locations</h2>
        </div>
     
      {cards.map((card) => {
        return (
          <div style={styles.cardStyles}>
            <h3>{card.title}</h3>
            <p>{card.address}</p>
            <p>{card.details}</p>
            <p>{card.city}</p>
          </div>
        );
      })}
    </section>
  );
};
