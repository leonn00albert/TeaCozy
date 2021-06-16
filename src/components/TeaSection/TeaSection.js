export const TeaSection = () => {
  const styles = {
    width: "1000px",
  };
  const images = [
    { src: "./img/img-berryblitz.jpg", text: "Fall Berry Blitz Tea" },
    { src: "./img/img-spiced-rum.jpg", text: "Spiced Rum Tea" },
    { src: "./img/img-donut.jpg", text: "Seasonal Donuts" },
    { src: "./img/img-myrtle-ave.jpg", text: "Myrtal Ave Tea" },
    { src: "./img/img-bedford-bizarre.jpg", text: "Bedford Bizarre Tea" },
  ];

  return (
    <section id='tea' className="tea-section" style={styles}>
      <div>
        <h2>Tea of the Month</h2>
        <p>What's Steeping at The Tea Cozy?</p>
      </div>

      {images.map((image) => {
        return (
          <a className="img-container">
            <img src={image.src} alt={image.text} width="300" height="200" />
            <p>{image.text}</p>
          </a>
        );
      })}
    </section>
  );
};
