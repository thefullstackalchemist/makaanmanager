import { HeroContent } from "./HeroContent";
import { HeroImages } from "./HeroImages";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <HeroContent />
        <HeroImages />
      </div>
      <div className={styles.bgOrb1} aria-hidden />
      <div className={styles.bgOrb2} aria-hidden />
    </section>
  );
}
