"use client";

import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { ServiceCard } from "./ServiceCard";
import { SERVICES } from "@/lib/data/services";
import styles from "./Services.module.css";

export function ServicesSection() {
  return (
    <section id="services" className={styles.section}>
      <div className="container">
        <AnimatedSection className={styles.header}>
          <p className={styles.eyebrow}>What We Do</p>
          <h2 className={styles.title}>
            So you never have to
            <br />
            <em>think about it again.</em>
          </h2>
          <p className={styles.subtitle}>
            The calls, the repairs, the negotiations, the late-night worries —
            every little thing that quietly steals your peace. It&apos;s ours now.
          </p>
        </AnimatedSection>

        <div className={styles.grid}>
          {SERVICES.map((service, i) => (
            <AnimatedSection key={service.id} delay={i * 80}>
              <ServiceCard service={service} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className={styles.cta} delay={200}>
          <Link href="/#contact" className="btn btn-ghost">
            Enquire About Any Service
            <IconArrowRight size={16} stroke={2} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
