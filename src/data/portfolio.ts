import { BarChart3, Brain, Sparkles, Table2 } from "lucide-react";
import femaDashboard from "@/assets/fema-dashboard.jpg";

export const GITHUB_USERNAME = "MohanKrishna-01";

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  icon: typeof Brain;
  image?: string;
  tech: string[];
  metrics: { label: string; value: string }[];
  problem: string;
  approach: string[];
  impact: string[];
  architecture: string[];
  links: { label: string; href: string }[];
}

export const projects: CaseStudy[] = [
  {
    id: "fema",
    title: "FEMA Disaster Analysis Dashboard",
    subtitle: "Power BI · DAX · Data Modeling",
    summary:
      "Interactive Power BI dashboard surfacing disaster trends and high-risk regions across five decades of FEMA declarations.",
    icon: BarChart3,
    image: femaDashboard,
    tech: ["Power BI", "DAX", "Data Modeling", "SQL"],
    metrics: [
      { label: "Data points analyzed", value: "50K+" },
      { label: "Regions mapped", value: "50" },
      { label: "Faster insight cycle", value: "40%" },
    ],
    problem:
      "Disaster declaration data was spread across flat files with no shared grain, making regional risk comparison slow and unreliable.",
    approach: [
      "Profiled and cleaned raw FEMA declaration extracts in Power Query",
      "Modeled a star schema with conformed date and geography dimensions",
      "Authored DAX measures for rolling incident counts and severity indices",
      "Designed a drill-through report flow from national view to county detail",
    ],
    impact: [
      "Cut manual reporting effort from hours to a single refresh",
      "Exposed the ten highest-risk regions by incident density",
      "Gave non-technical reviewers a self-serve filtering experience",
    ],
    architecture: ["FEMA raw extracts", "Power Query cleanup", "Star schema model", "DAX measures", "Drill-through report"],
    links: [{ label: "Request walkthrough", href: "#contact" }],
  },
  {
    id: "calorie",
    title: "Food Calorie Prediction",
    subtitle: "Computer Vision · Deep Learning",
    summary:
      "Vision model that estimates calorie content of a meal by combining image segmentation with a nutritional reference dataset.",
    icon: Brain,
    tech: ["Python", "TensorFlow", "Computer Vision", "Deep Learning"],
    metrics: [
      { label: "Food classes", value: "20+" },
      { label: "Validation accuracy", value: "88%" },
      { label: "Inference time", value: "<1s" },
    ],
    problem:
      "Manual calorie logging is slow and inaccurate, and most datasets describe nutrition per gram rather than per photographed portion.",
    approach: [
      "Curated and augmented a labelled food image dataset",
      "Fine-tuned a convolutional backbone for multi-class food recognition",
      "Mapped predicted classes to a nutritional lookup table with portion heuristics",
      "Evaluated with confusion matrices to isolate visually similar classes",
    ],
    impact: [
      "Reduced logging to a single photograph",
      "Produced an explainable class-to-nutrition mapping",
      "Documented failure modes for visually similar dishes",
    ],
    architecture: ["Meal photo", "Segmentation", "CNN classifier", "Nutrition lookup", "Calorie estimate"],
    links: [
      { label: "GitHub", href: "https://github.com/MohanKrishna-01/food-calorie-prediction" },
    ],
  },
  {
    id: "callcenter",
    title: "Call Center Performance Dashboard",
    subtitle: "Excel · Operational Analytics",
    summary:
      "Operational dashboard tracking call volume, handling time, agent ratings and CSAT with slicer-driven exploration.",
    icon: Table2,
    tech: ["Excel", "Pivot Tables", "Data Analysis"],
    metrics: [
      { label: "KPIs tracked", value: "12" },
      { label: "Agents covered", value: "30+" },
      { label: "Refresh time", value: "Instant" },
    ],
    problem:
      "Team leads reviewed raw call logs manually, so service-level dips were only noticed after the reporting window closed.",
    approach: [
      "Normalised the call log into a single analysis-ready table",
      "Built pivot-based KPI blocks for volume, duration and satisfaction",
      "Added slicers for agent, channel and time window",
      "Highlighted breaches with conditional formatting thresholds",
    ],
    impact: [
      "Made daily service-level review a two-minute task",
      "Surfaced coaching candidates from rating trends",
      "Removed repeated copy-paste reporting work",
    ],
    architecture: ["Call logs", "Cleaned table", "Pivot KPI layer", "Slicer controls", "Leadership view"],
    links: [
      { label: "View dashboard", href: "https://ai.studio/apps/drive/10rU7bLdyM_2_E7V7VPwiWWnbrPxkJ-V5" },
    ],
  },
  {
    id: "campuscollab",
    title: "CampusCollab AI",
    subtitle: "AI Product · Student Collaboration",
    summary:
      "All-in-one student platform to find teammates, generate project ideas with AI and manage delivery workflows.",
    icon: Sparkles,
    tech: ["AI/ML", "Python", "Web Platform"],
    metrics: [
      { label: "Core modules", value: "3" },
      { label: "Idea templates", value: "25+" },
      { label: "Setup time", value: "2 min" },
    ],
    problem:
      "Students lose weeks forming project teams and scoping ideas before any real building starts.",
    approach: [
      "Mapped the team-formation journey into matching, ideation and tracking",
      "Used AI prompts to generate scoped, skill-matched project briefs",
      "Added a lightweight board for milestones and ownership",
      "Iterated on the flow with peer feedback rounds",
    ],
    impact: [
      "Compressed team formation from weeks to a session",
      "Gave every team a scoped brief before kickoff",
      "Kept ownership visible across the semester",
    ],
    architecture: ["Student profile", "Skill matching", "AI idea generator", "Project board", "Delivery tracking"],
    links: [
      { label: "View project", href: "https://ai.studio/apps/drive/1PqS3rf6gbKowMGQkaO--RcZwihWGR4Q2" },
    ],
  },
];

export const allTech = Array.from(new Set(projects.flatMap((p) => p.tech))).sort();

export interface TimelineItem {
  year: string;
  title: string;
  org: string;
  detail: string;
  kind: "education" | "achievement";
}

export const timeline: TimelineItem[] = [
  {
    year: "2022 – 2026",
    title: "B.Tech, Computer Science (Data Science)",
    org: "GITAM University",
    detail: "Final-year student · CGPA 7.60 · Coursework in ML, statistics, data engineering and visualization.",
    kind: "education",
  },
  {
    year: "May – Jun 2024",
    title: "Data Science Intern",
    org: "Data Valley",
    detail: "Hands-on Python, EDA, machine learning, NLP and model deployment on real datasets.",
    kind: "achievement",
  },
  {
    year: "Apr – Jul 2025",
    title: "Data Analysis Using Python",
    org: "APSSDC",
    detail: "Applied training in data cleaning, transformation and visualization workflows.",
    kind: "achievement",
  },
  {
    year: "Dec 2025 – Feb 2026",
    title: "Data Analytics Intern — Internship 6.0",
    org: "Infosys Springboard",
    detail: "Delivered the FEMA disaster analysis dashboard using Power BI, DAX and dimensional modeling.",
    kind: "achievement",
  },
];

export const achievements = [
  { label: "Power BI Practitioner", detail: "Dashboards shipped end to end" },
  { label: "Python for Analytics", detail: "Pandas, NumPy, scikit-learn" },
  { label: "SQL Modeling", detail: "Star schemas & joins at scale" },
  { label: "Infosys Springboard", detail: "Internship 6.0 completed" },
];

export const posts = [
  {
    title: "Designing a star schema that survives real data",
    excerpt:
      "Why conformed date and geography dimensions saved the FEMA dashboard from unusable drill-downs.",
    date: "Coming soon",
    tag: "Data Modeling",
  },
  {
    title: "DAX measures I reuse in every Power BI report",
    excerpt:
      "A short library of rolling totals, period comparisons and safe division patterns.",
    date: "Coming soon",
    tag: "Power BI",
  },
  {
    title: "From notebook to narrative",
    excerpt:
      "How I turn exploratory analysis into three sentences a decision-maker can act on.",
    date: "Coming soon",
    tag: "Analytics",
  },
];

export const testimonials = [
  { quote: "Add a recommendation here.", name: "Your mentor", role: "Reserved for a manager or professor" },
  { quote: "Add a recommendation here.", name: "Your teammate", role: "Reserved for a project collaborator" },
  { quote: "Add a recommendation here.", name: "Your reviewer", role: "Reserved for an internship reviewer" },
];