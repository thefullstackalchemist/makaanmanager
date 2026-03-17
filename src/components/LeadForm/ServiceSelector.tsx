"use client";

import { IconCheck } from "@tabler/icons-react";
import { SERVICES } from "@/lib/data/services";
import styles from "./ServiceSelector.module.css";

const SERVICE_LABELS = SERVICES.map((s) => s.title);
const NOT_SURE = "Not sure yet";
const OPTIONS = [...SERVICE_LABELS, NOT_SURE];

interface Props {
  selected: string[];
  onToggle: (service: string) => void;
}

function ItemIcon({ active }: { active: boolean }) {
  if (active) return <IconCheck size={15} stroke={2.5} className={styles.iconCheck} />;
  return <span className={styles.dot} />;
}

export function ServiceSelector({ selected, onToggle }: Props) {
  const hasService  = selected.some((s) => SERVICE_LABELS.includes(s));
  const hasNotSure  = selected.includes(NOT_SURE);
  const anySelected = selected.length > 0;

  return (
    <div className={styles.list}>
      {OPTIONS.map((label) => {
        const isNotSure  = label === NOT_SURE;
        const active     = selected.includes(label);
        const disabled   = (!active && isNotSure && hasService) ||
                           (!active && !isNotSure && hasNotSure);
        const fomo       = !active && !disabled && anySelected;

        return (
          <button
            key={label}
            type="button"
            onClick={() => onToggle(label)}
            disabled={disabled}
            aria-pressed={active}
            className={`${styles.item} ${active ? styles.active : ""} ${fomo ? styles.fomo : ""}`}
          >
            <span className={styles.iconSlot}>
              <ItemIcon active={active} />
            </span>
            <span className={styles.label}>{label}</span>
          </button>
        );
      })}
    </div>
  );
}
