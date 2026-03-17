import { AnimatedSection } from "@/components/common/AnimatedSection";
import styles from "./Stats.module.css";

export function StatsSection() {
  return (
    <section id="why-us" className={styles.section}>
      <div className="container">
        <AnimatedSection className={styles.inner}>
          <p className={styles.eyebrow}>What We Believe</p>
          <div className={styles.quoteMark}>&ldquo;</div>
          <blockquote className={styles.quote}>
            Your peace of mind is not a perk.
            <br />
            <em>It&apos;s the whole point.</em>
          </blockquote>
          <p className={styles.sub}>
            Property ownership should feel like pride — not a second job you never applied for.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
