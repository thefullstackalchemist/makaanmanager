import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import styles from "./Hero.module.css";

export function HeroContent() {
  return (
    <div className={styles.content}>
      <div className={styles.badge}>Property Care, Reimagined</div>

      <h1 className={styles.headline}>
        You&apos;re away.
        <br />
        <em className={styles.headlineAccent}>Your house would never know.</em>
      </h1>

      <p className={styles.subheadline}>
        From late-night repairs to difficult tenants — we handle it all.
        You stay informed. You stay in control.
        You don&apos;t have to be there.
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
