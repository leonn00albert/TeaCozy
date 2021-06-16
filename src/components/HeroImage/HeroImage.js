export const HeroImage = () => {
  const imgSrc = "img/img-mission-background.jpg ";
  const imgAlt = "Background";
  const styles = {
    height: '700px',
    width: '1200px',
    backgroundImage : `url(${imgSrc})`,
  }
  return (
    <section className="hero-section" style={styles}>
      <div className="banner">
        <h2>Our Mission</h2>
        <p>Handpicked, Artisansally Curated, Free Range, Sustainable, Small Batch, Fair Trade, Organce Tea</p>
      </div>
    </section>
  );
};
