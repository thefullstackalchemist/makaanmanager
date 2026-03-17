import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import styles from "./Hero.module.css";

export function HeroContent() {
  return (
    <div className={styles.content}>
      <div className={styles.badge}>Property Care, Reimagined</div>

      <h1 className={styles.headline}>
        Far from home.
        <br />
        <em className={styles.headlineAccent}>Never far from care.</em>
      </h1>

      <p className={styles.subheadline}>
        Whether you&apos;re two streets away or two time zones apart —
        your property is looked after, maintained, and loved
        exactly as if you never left.
      </p>

      <div className={styles.ctas}>
        <Link href="/#services" className="btn btn-primary">
          See what we do
          <IconArrowRight size={16} stroke={2} />
        </Link>
        <Link href="/#contact" className="btn btn-ghost">
          Talk to us
        </Link>
      </div>
    </div>
  );
}
