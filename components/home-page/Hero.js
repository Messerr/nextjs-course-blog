import Image from "next/image";
import classes from "./Hero.module.css";

const Hero = (props) => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/6812208.jpg"
          alt="An image showing David"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I&apos;m David</h1>
      <p>Web developer</p>
    </section>
  );
};

export default Hero;
