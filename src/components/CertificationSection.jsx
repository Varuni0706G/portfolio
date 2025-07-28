import { BadgeCheck } from "lucide-react";

export const CertificationSection = () => {
  const certifications = [
    {
      title: "Software Testing",
      platform: "NPTEL",
      url: "https://archive.nptel.ac.in/noc/B2C/candidate_login/transcript_download.php",
    },
    {
      title: "Foundations of Cyber Security",
      platform: "COURSERA",
      url: "https://www.coursera.org/account/accomplishments/verify/XLMB4A3Z5LME",
    },
    {
      title: "Play It Safe: Manage Security Risks",
      platform: "COURSERA",
      url: "https://www.coursera.org/account/accomplishments/verify/L0YMS1NZRZAH",
    },
      {
      title: "Web Development",
      platform: "InternPe",
      url: "https://drive.google.com/file/d/1gXQCyc-mLW9aEJG9YCkOzD77cBvcLQZW/view?usp=drivesdk",
    },
  
  ];

  return (
    <section id="certifications" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Certifications</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-card p-5 rounded-lg shadow-sm flex items-start gap-4 hover:shadow-md transition"
            >
              <BadgeCheck className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-medium">{cert.title}</h3>
                <p className="text-sm font-bold">{cert.platform}</p>
                {cert.url && (
                  <a
  href={cert.url}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-2 px-3 py-1 text-sm font-medium rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition"
>
  View
</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
