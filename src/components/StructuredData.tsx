import { useEffect } from "react";

const StructuredData = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Mohan Krishna Ambati",
      "jobTitle": "Data Science Student",
      "description": "B.Tech Computer Science Engineering [Data Science] student skilled in Python, SQL, and ML, eager to learn and contribute to data-driven decisions.",
      "url": "https://mohankrishnaambati.com",
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
