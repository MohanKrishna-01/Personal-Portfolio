import { useEffect } from "react";

const StructuredData = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Mohan Krishna Ambati",
      "jobTitle": "Data Analyst & Power BI Developer",
      "email": "mailto:mohankrishnaambati7@gmail.com",
      "description": "Data analyst and Power BI developer building dashboards, dimensional models and Python analytics that turn raw data into decisions.",
      "url": typeof window !== "undefined" ? window.location.origin : "/",
      "sameAs": [
        "https://www.linkedin.com/in/mohan-krishna-ambati-a41a582b6",
        "https://github.com/MohanKrishna-01"
      ],
      "knowsAbout": [
        "Data Science",
        "Machine Learning",
        "Python",
        "SQL",
        "Data Analysis",
        "Power BI",
        "Deep Learning",
        "NLP"
      ],
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "GITAM University"
      }
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default StructuredData;
