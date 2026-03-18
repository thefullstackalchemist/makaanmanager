import { AnimatedSection } from "@/components/common/AnimatedSection";
import styles from "./EmotionStrip.module.css";

const BEATS = [
  {
    trigger: "A leak at 2 AM?",
    resolution: "We're already on it.",
  },
  {
    trigger: "An upset tenant?",
    resolution: "We mediate. You don't even get the call.",
  },
  {
    trigger: "Months without a visit?",
    resolution: "Your house looks like you never left.",
  },
];

export function EmotionStrip() {
  return (
    <section className={styles.strip} aria-label="What we handle">
      <div className="container">
        <div className={styles.grid}>
          {BEATS.map((beat, i) => (
            <AnimatedSection key={beat.trigger} delay={i * 100} className={styles.beat}>
              <p className={styles.trigger}>{beat.trigger}</p>
              <p className={styles.resolution}>{beat.resolution}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
