function Banner({ image, alt, slogan }) {
  return (
    <div className="hero">
      <img src={image} alt={alt} />
      {slogan && <h1>{slogan}</h1>}
    </div>
  );
}

export default Banner;
