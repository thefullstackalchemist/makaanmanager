import { AnimatedSection } from "@/components/common/AnimatedSection";
import { ServiceCard } from "@/components/Services/ServiceCard";
import { SERVICES } from "@/lib/data/services";
import styles from "./ServicePage.module.css";

interface Props {
  currentId: string;
}

export function RelatedServices({ currentId }: Props) {
  const others = SERVICES.filter((s) => s.id !== currentId);

  return (
    <section className={styles.relatedSection}>
      <div className="container">
        <AnimatedSection className={styles.relatedHeader}>
          <p className={styles.eyebrow}>Don&apos;t stop here</p>
          <h2 className={styles.sectionTitle}>
            Most clients need more than <em>one thing sorted.</em>
          </h2>
          <p className={styles.sectionDesc}>
            While you&apos;re here — these are the services that usually go hand in hand with this one.
          </p>
        </AnimatedSection>

        <div className={styles.relatedGrid}>
          {others.map((service, i) => (
            <AnimatedSection key={service.id} delay={i * 80}>
              <ServiceCard service={service} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
