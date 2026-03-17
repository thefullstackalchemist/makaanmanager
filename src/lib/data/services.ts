export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
  tagline: string;
  longDescription: string;
  features: string[];
  process: { step: string; title: string; description: string }[];
}

export const SERVICES: Service[] = [
  {
    id: "tenant-management",
    title: "Tenant Management",
    description:
      "The calls, the disputes, the late rent — none of it reaches you. We're the buffer between you and the stress.",
    image: "/services/tenant-management.png",
    href: "/services/tenant-management",
    tagline: "Stress-free tenancy",
    longDescription:
      "Managing tenants can be time-consuming and stressful. We take the entire responsibility off your hands — from finding the right tenant to collecting rent and handling every maintenance request, so your property stays occupied, cared for, and profitable.",
    features: [
      "Rental agreement drafting & execution",
      "Tenant screening and background checks",
      "Monthly rent collection and tracking",
      "Maintenance request coordination",
      "Security deposit management",
      "Regular property inspections",
      "Tenant communication and dispute resolution",
    ],
    process: [
      {
        step: "01",
        title: "Property Assessment",
        description:
          "We visit your property, assess its condition, and understand your expectations for the ideal tenant.",
      },
      {
        step: "02",
        title: "Tenant Sourcing",
        description:
          "We list, screen, and onboard qualified tenants — handling all agreements and documentation.",
      },
      {
        step: "03",
        title: "Ongoing Management",
        description:
          "We manage everything month-to-month: rent, repairs, inspections, and communication.",
      },
    ],
  },
  {
    id: "interior-design",
    title: "Home Interiors",
    description:
      "You come back to a space that surprises you. Every decision, every detail, every coat of paint — handled.",
    image: "/services/interior-design.png",
    href: "/services/interior-design",
    tagline: "Spaces that inspire",
    longDescription:
      "Your home should reflect who you are. Our interior design service blends aesthetics with functionality — from initial design concepts to complete on-site execution, all while keeping you informed with regular remote updates so you never feel out of the loop.",
    features: [
      "Professional design consultation",
      "Paint and wallpaper selection & execution",
      "Furniture layout and styling recommendations",
      "Material and finish procurement",
      "Full project management",
      "Remote progress updates with photos & videos",
      "Handover with care and maintenance guide",
    ],
    process: [
      {
        step: "01",
        title: "Consultation",
        description:
          "Share your vision, budget, and preferences. We listen, understand, and propose a design direction.",
      },
      {
        step: "02",
        title: "Design & Planning",
        description:
          "We create a detailed plan with material samples, layout proposals, and a clear timeline.",
      },
      {
        step: "03",
        title: "Execution & Handover",
        description:
          "Our team brings the design to life with quality checks at every stage, delivered on time.",
      },
    ],
  },
  {
    id: "house-maintenance",
    title: "House Maintenance",
    description:
      "Things break quietly, and at the worst times. We fix them before you even know they happened.",
    image: "/services/house-maintenance.png",
    href: "/services/house-maintenance",
    tagline: "Always move-in ready",
    longDescription:
      "A well-maintained property holds its value and attracts better tenants. Our maintenance service ensures your home is always in top condition — whether you live there, rent it out, or keep it as an investment — through scheduled visits and on-demand support.",
    features: [
      "Minor plumbing and electrical repairs",
      "Repainting and surface touch-ups",
      "Scheduled housekeeping and cleaning",
      "Outdoor and garden upkeep",
      "Regular scheduled property inspections",
      "Emergency repair coordination",
      "Detailed maintenance logs and reports",
    ],
    process: [
      {
        step: "01",
        title: "Property Check-in",
        description:
          "An initial inspection identifies current needs and helps us create a tailored maintenance schedule.",
      },
      {
        step: "02",
        title: "Scheduled Visits",
        description:
          "Our team visits at agreed intervals for upkeep, inspections, and preventive maintenance.",
      },
      {
        step: "03",
        title: "On-demand Support",
        description:
          "Need something fixed urgently? Reach out anytime and we'll coordinate a prompt response.",
      },
    ],
  },
  {
    id: "deep-clean",
    title: "Tenant Transition",
    description:
      "Out with the old, in with the spotless. Your property resets between tenants as if no one ever lived there.",
    image: "/services/deep-clean.png",
    href: "/services/deep-clean",
    tagline: "Fresh start, every time",
    longDescription:
      "The period between tenants is critical. A pristine, well-presented property attracts better tenants faster and commands higher rent. Our tenant transition service ensures every corner is spotless, every repair is done, and every new tenant walks into a home they're proud of.",
    features: [
      "Full property deep cleaning",
      "Damage assessment and documentation",
      "Repair and restoration coordination",
      "Fresh paint and surface touch-ups",
      "Carpet and upholstery cleaning",
      "Move-in inspection checklist",
      "Next tenant readiness certification",
    ],
    process: [
      {
        step: "01",
        title: "Move-out Inspection",
        description:
          "Detailed documentation of property condition immediately after tenant departure.",
      },
      {
        step: "02",
        title: "Restoration & Cleaning",
        description:
          "Deep cleaning, minor repairs, paint touch-ups, and damage restoration carried out thoroughly.",
      },
      {
        step: "03",
        title: "Move-in Ready",
        description:
          "Property is handed over in perfect condition — inspected, certified, and ready for the next tenant.",
      },
    ],
  },
];

export const SERVICE_OPTIONS = SERVICES.map((s) => s.title).concat([
  "General Inquiry",
]);
