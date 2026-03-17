import { IconCheck } from "@tabler/icons-react";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { Service } from "@/lib/data/services";
import styles from "./ServicePage.module.css";

interface Props {
  service: Service;
}

export function ServiceFeatures({ service }: Props) {
  return (
    <section className={styles.featuresSection}>
      <div className="container">
        <div className={styles.featuresInner}>
          <AnimatedSection className={styles.featuresLeft}>
            <p className={styles.eyebrow}>What&apos;s Included</p>
            <h2 className={styles.sectionTitle}>
              Everything you need,
              <br />
              <em>nothing you don&apos;t.</em>
            </h2>
            <p className={styles.sectionDesc}>{service.longDescription}</p>
          </AnimatedSection>

          <AnimatedSection className={styles.featuresRight} delay={100}>
            <ul className={styles.featureList}>
              {service.features.map((feature, i) => (
                <li key={i} className={styles.featureItem}>
                  <span className={styles.featureCheck}>
                    <IconCheck size={14} stroke={2.5} />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
