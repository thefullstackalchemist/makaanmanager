import { AnimatedSection } from "@/components/common/AnimatedSection";
import { Service } from "@/lib/data/services";
import styles from "./ServicePage.module.css";

interface Props {
  service: Service;
}

export function ServiceProcess({ service }: Props) {
  return (
    <section className={styles.processSection}>
      <div className="container">
        <AnimatedSection className={styles.processHeader}>
          <p className={styles.eyebrow}>How It Works</p>
          <h2 className={styles.sectionTitle}>
            Simple, transparent, <em>effortless.</em>
          </h2>
        </AnimatedSection>

        <div className={styles.processGrid}>
          {service.process.map((item, i) => (
            <AnimatedSection key={item.step} className={styles.processCard} delay={i * 100}>
              <div className={styles.processStep}>{item.step}</div>
              <h3 className={styles.processTitle}>{item.title}</h3>
              <p className={styles.processDesc}>{item.description}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
