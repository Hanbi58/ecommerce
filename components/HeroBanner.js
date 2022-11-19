import Link from "next/link";
import Image from "next/image";
import { urlFor } from "../lib/client";
function HeroBanner({ heroBanner }) {
  console.log(heroBanner);
  return (
    <div className="hero-banner-container">
      <p className="beats-solo">{heroBanner.smallText}</p>
      <h3>{heroBanner.midText}</h3>
      <h1>{heroBanner.largeText1}</h1>
      <picture className="hero-banner-image">
        <source srcSet={heroBanner.image} type="image/webp" />
        <img src={urlFor(heroBanner.image)} alt="headphones" />
      </picture>
      <div>
        <Link href={`/product/${heroBanner.product}`}>
          <button type="button">{heroBanner.buttonText}</button>
        </Link>

        <div className="desc">
          <h5>Description</h5>
          <p>{heroBanner.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
