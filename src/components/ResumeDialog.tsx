import { useState } from "react";
import { Download, FileText, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const ATS_RESUME = `MOHAN KRISHNA AMBATI
Data Analyst | Power BI Developer
Email: mohankrishnaambati7@gmail.com | Phone: +91 70323 90696
LinkedIn: https://www.linkedin.com/in/mohan-krishna-ambati-a41a582b6
GitHub: https://github.com/MohanKrishna-01

SUMMARY
Final-year B.Tech Computer Science (Data Science) student specialising in analytics and
business intelligence. Builds Power BI dashboards, dimensional data models and Python
analysis workflows that turn raw operational data into decisions.

SKILLS
Business Intelligence: Power BI, DAX, Data Modeling, Star Schema, Excel
Programming: Python (Pandas, NumPy, scikit-learn), SQL
Analytics: EDA, Statistical Analysis, Data Cleaning, Visualization, Storytelling
Machine Learning: Supervised Learning, Deep Learning, NLP, Computer Vision

EXPERIENCE
Data Analytics Intern - Infosys Springboard, Internship 6.0 (Dec 2025 - Feb 2026)
- Built Power BI dashboards for disaster analysis across 50 regions
- Applied dimensional data modeling and DAX measures
- Identified regional risk trends that shortened the insight cycle by 40%

Data Analysis Using Python - APSSDC (Apr 2025 - Jul 2025)
- Delivered data cleaning, transformation and visualization workflows on real datasets

Data Science Intern - Data Valley (May 2024 - Jun 2024)
- Hands-on work across Python, EDA, machine learning, NLP and model deployment

PROJECTS
FEMA Disaster Analysis Dashboard - Power BI, DAX, Data Modeling
- Modeled 50K+ disaster records into a star schema with drill-through reporting

Food Calorie Prediction - Python, TensorFlow, Computer Vision
- Vision model estimating meal calories via classification and nutrition lookup

Call Center Performance Dashboard - Excel, Pivot Tables
- Operational dashboard tracking 12 KPIs across 30+ agents

EDUCATION
B.Tech, Computer Science Engineering (Data Science)
GITAM University | 2022 - 2026 | CGPA 7.60

CERTIFICATIONS
- Data Analytics Intern, Internship 6.0 - Infosys Springboard
- Data Visualization - LinkedIn Learning
- Power BI - Microsoft Learn
- Python for Data Analysis
`;

const ResumeDialog = ({ trigger }: { trigger: (open: () => void) => React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  const downloadAts = () => {
    const blob = new Blob([ATS_RESUME], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Mohan-Krishna-Ambati-ATS-Resume.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      {trigger(() => setOpen(true))}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" aria-hidden="true" />
              Resume preview
            </DialogTitle>
            <DialogDescription>
              Read the full resume below, or download an ATS-friendly plain-text version.
            </DialogDescription>
          </DialogHeader>

          <div className="h-[60vh] overflow-hidden rounded-xl border border-border bg-muted/30">
            <object data="/MK_Resume.pdf#view=FitH" type="application/pdf" className="h-full w-full">
              <pre className="h-full overflow-auto p-6 text-xs leading-relaxed text-muted-foreground whitespace-pre-wrap">
                {ATS_RESUME}
              </pre>
            </object>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild className="rounded-full">
              <a href="/MK_Resume.pdf" download="Mohan-Krishna-Ambati-Resume.pdf">
                <Download className="mr-2 h-4 w-4" aria-hidden="true" />
                Download PDF
              </a>
            </Button>
            <Button variant="outline" className="rounded-full" onClick={downloadAts}>
              <FileText className="mr-2 h-4 w-4" aria-hidden="true" />
              ATS text version
            </Button>
            <Button variant="ghost" className="rounded-full" onClick={() => window.print()}>
              <Printer className="mr-2 h-4 w-4" aria-hidden="true" />
              Print
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ResumeDialog;
export { ATS_RESUME };