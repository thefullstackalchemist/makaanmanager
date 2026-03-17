import { IconShieldCheck, IconClock, IconHeadset } from "@tabler/icons-react";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { LeadForm } from "@/components/LeadForm";
import styles from "./LeadSection.module.css";

const BENEFITS = [
  {
    icon: IconHeadset,
    title: "Someone who actually picks up",
    text: "One advisor. One number. They know your property like their own.",
  },
  {
    icon: IconClock,
    title: "Back to you within 24 hours",
    text: "No chasing. No waiting. Just a response that respects your time.",
  },
  {
    icon: IconShieldCheck,
    title: "No pressure, ever",
    text: "Talk to us, understand what's possible, and decide with a clear head.",
  },
];

export function LeadSection({ defaultService }: { defaultService?: string } = {}) {
  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className={styles.inner}>

          {/* Left: Description */}
          <AnimatedSection className={styles.left}>
            <p className={styles.eyebrow}>Let&apos;s Talk</p>
            <h2 className={styles.title}>
              What worries you
              <br />
              <em>about your property?</em>
            </h2>
            <p className={styles.subtitle}>
              Tell us. We&apos;ve heard it a hundred times — and we know exactly
              how to make it stop keeping you up at night.
            </p>

            <div className={styles.benefits}>
              {BENEFITS.map((b) => (
                <div key={b.title} className={styles.benefit}>
                  <div className={styles.benefitIcon}>
                    <b.icon size={18} stroke={1.5} />
                  </div>
                  <div>
                    <div className={styles.benefitTitle}>{b.title}</div>
                    <div className={styles.benefitText}>{b.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Right: Form */}
          <AnimatedSection className={styles.right} delay={150}>
            <div className={styles.formCard}>
              <h3 className={styles.formTitle}>One step to peace of mind.</h3>
              <p className={styles.formSubtitle}>
                Pick what&apos;s on your mind — we&apos;ll take it from there.
              </p>
              <LeadForm defaultService={defaultService} />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
