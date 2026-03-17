"use client";

import { IconCheck, IconAlertCircle, IconLoader2 } from "@tabler/icons-react";
import { ServiceSelector } from "./ServiceSelector";
import { useLeadForm } from "./useLeadForm";
import styles from "./LeadForm.module.css";

interface Props {
  defaultService?: string;
}

export function LeadForm({ defaultService }: Props) {
  const { formData, handleField, toggleService, handleSubmit, status, reset } =
    useLeadForm(defaultService);

  if (status === "success") {
    return (
      <div className={styles.feedback}>
        <div className={styles.feedbackIcon}>
          <IconCheck size={28} stroke={2.5} />
        </div>
        <h3 className={styles.feedbackTitle}>We&apos;ll be in touch!</h3>
        <p className={styles.feedbackText}>
          Someone from our team will reach out within 24 hours.
        </p>
        <button onClick={reset} className={`btn btn-ghost ${styles.resetBtn}`}>
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form} noValidate>
      {status === "error" && (
        <div className={styles.errorBanner}>
          <IconAlertCircle size={16} />
          <span>Something went wrong. Please try again.</span>
          <button type="button" onClick={reset} className={styles.errorDismiss}>×</button>
        </div>
      )}

      <div className={styles.field}>
        <label className={styles.label}>What do you need help with?</label>
        <ServiceSelector
          selected={formData.services}
          onToggle={toggleService}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="name" className={styles.label}>Your Name</label>
        <input
          id="name"
          type="text"
          className={styles.input}
          placeholder="Full name"
          value={formData.name}
          onChange={(e) => handleField("name", e.target.value)}
          required
        />
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input
            id="email"
            type="email"
            className={styles.input}
            placeholder="your@email.com"
            value={formData.email}
            onChange={(e) => handleField("email", e.target.value)}
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="mobile" className={styles.label}>Mobile</label>
          <input
            id="mobile"
            type="tel"
            className={styles.input}
            placeholder="+91 98765 43210"
            value={formData.mobile}
            onChange={(e) => handleField("mobile", e.target.value)}
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className={`btn btn-primary ${styles.submit}`}
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <>
            <IconLoader2 size={16} className={styles.spinner} />
            Sending…
          </>
        ) : (
          "Get in touch"
        )}
      </button>

      <p className={styles.privacy}>
        No spam. No pressure. Just a conversation.
      </p>
    </form>
  );
}
