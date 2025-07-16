"use client";
import BtnHome from "@/components/BtnHome";
import NavBar from "@/components/NavBar";
import { useTranslations } from "next-intl";
import "@/app/[locale]/index.css";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AboutPage() {
  const t = useTranslations("AboutPage");
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDarkMode = currentTheme === "dark";

  const certs = [
    {
      name: "IBM Data Science",
      entity: "IBM",
      url: "https://coursera.org/share/db6a4621fe66c76a4ba7f5a41052c29f",
      skills: [
        "Professional Networking",
        "Data Analysis",
        "Generative AI",
        "Data Manipulation",
        "Data Mining",
        "Supervised Learning",
        "Plotly",
        "Data Literacy",
        "Data Import/Export",
        "Unsupervised Learning",
        "SQL",
        "Data Cleansing",
      ],
    },
    {
      name: "Microsoft Azure Data Scientist Associate (DP100) Exam Prep",
      entity: "Microsoft",
      url: "https://coursera.org/share/851e517baf2bb42903eb8812f219b014",
      skills: [
        "Continuous Monitoring",
        "Data Ethics",
        "Data Pipelines",
        "Data Security",
        "Supervised Learning",
        "Data Processing",
        "Machine Learning",
        "Scalability",
        "Distributed Computing",
        "Artificial Neural Networks",
        "Tensorflow",
        "Virtual Machines",
      ],
    },
    {
      name: "Robotic Process Automation (RPA)",
      entity: "UiPath",
      url: "https://coursera.org/share/15d4c1f022702a3f254958f58343a357",
      skills: [
        "Web Scraping",
        "Data Management",
        "Test Automation",
        "Data Manipulation",
        "User Interface (UI)",
        "Email Security",
        "Business Process Automation",
        "Programming Principles",
        "UI Components",
        "Excel Macros",
        "Data Import/Export",
        "Integrated Development Environments",
      ],
    },
    {
      name: "Fintech: Foundations & Applications of Financial Technology",
      entity: "Wharton School of the University of Pennsylvania",
      url: "https://coursera.org/share/36b7262e13fe16e01f368157de0f6c3b",
      skills: [
        "Financial Analysis",
        "Emerging Technologies",
        "Technology Strategies",
        "Financial Market",
        "Lending and Underwriting",
        "Cryptography",
        "Credit/Debit Card Processing",
        "Fundraising and Crowdsourcing",
        "Investments",
        "Financial Services",
        "FinTech",
        "Market Analysis",
      ],
    },
    {
      name: "Meta Front-End Developer",
      entity: "Meta",
      url: "https://coursera.org/share/8296997d1d83d7fda8bbccc1907e6710",
      skills: [
        "Algorithms",
        "GitHub",
        "Version Control",
        "Git (Version Control System)",
        "Jest (JavaScript Testing Framework)",
        "Bootstrap (Front-End Framework)",
        "JavaScript",
        "Usability Testing",
        "React.js",
        "UI/UX Research",
        "User Experience Design",
        "Unix Commands",
      ],
    },
    {
      name: "Meta React",
      entity: "Meta",
      url: "https://coursera.org/share/64bb1f5b1c78289b2acc4b7a8d7ab5a4",
      skills: [
        "Unit Testing",
        "Jest (JavaScript Testing Framework)",
        "UI Components",
        "Web Applications",
        "Javascript",
        "Application Development",
        "Event-Driven Programming",
        "Web Development Tools",
        "React.js",
        "API Design",
        "Integration Testing",
        "TypeScript",
      ],
    },
  ];

  const delayClasses = [
    `animate-delay-[800ms]`,
    `animate-delay-[900ms]`,
    `animate-delay-[1000ms]`,
    `animate-delay-[1100ms]`,
    `animate-delay-[1200ms]`,
    `animate-delay-[1300ms]`,
  ];

  return (
    <div className="div-parent-scrolled relative flex flex-col justify-between items-end text-center font-(family-name:--font-bebas)">
      <div className="w-full p-6 bg-[#8880] animate-fade-down animate-ease-in-out animate-delay-200">
        <NavBar />
        <section>
          <h1>{t("title")}</h1>
          <p>{t("description1")}</p>
          <p>{t("description2")}</p>
          <p>{t("description3")}</p>
        </section>
        <section>
          <h1>educacion</h1>
          <a href="">Igneniero electrónico</a>
          <h2>Universidad del Magdalena</h2>
          <h3>Ago 2019 - Dic 2024</h3>
        </section>
        <section className="">
          <h1 className="md:text-7xl text-4xl m-4 mb-8 text-start font-(family-name:--font-teko) tracking-wide">
            {t("certificates")}
          </h1>
          <div className="md:p-4">
            {certs.map((cert, index) => {
              return (
                <motion.div
                  key={cert.url}
                  onClick={() =>
                    window.open(cert.url, "_blank", "noopener,noreferrer")
                  }
                  initial={{ opacity: 0, y: -40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0 }}
                  viewport={{ once: true, amount: "all" }}
                  className={`flex flex-col justify-center items-center md:h-[12rem] h-[24rem] md:w-full
                    my-4 md:p-2 text-start rounded-md
                     ${delayClasses[index]} cursor-pointer cursor-interactive transition-all duration-300 group`}
                >
                  <section
                    className={`flex flex-col md:w-full w-full md:h-[8rem] h-[5.5em] justify-center items-start px-2 rounded-md ${
                      isDarkMode
                        ? "bg-linear-to-b from-transparent from-0% via-[#9a006543] via-10% group-hover:via-[#6a0045f3] group-hover:from-[#6a0045f3] to-[#0a0a0a00] to-95%"
                        : "bg-linear-to-b from-transparent from-0% via-[#b5fffd70] via-10% group-hover:via-[#85fffd] group-hover:from-[#85fffd] to-[#0000] to-95%"
                    }`}
                  >
                    <h1 className="md:text-[0.8rem] text-[0.8em] tracking-widest max-w-full md:mb-0 mb-1 border-b-1 font-(family-name:--font-spaceGrotesk) truncate overflow-hidden whitespace-nowrap">
                      {cert.entity}
                    </h1>
                    <div className="flex flex-row w-full items-center justify-start">
                      <h1 className=" md:text-[2rem] text-[1.4rem] tracking-wide max-w-full truncate overflow-hidden whitespace-nowrap opacity-70 group-hover:opacity-100">
                        {cert.name}
                      </h1>
                      <div className="flex flex-row items-center justify-start transition-transform duration-300 group-hover:-rotate-45 ml-[0.2rem]">
                        <ArrowRight size={20} />
                      </div>
                    </div>
                  </section>
                  <div className="flex flex-row flex-wrap mt-4">
                    {cert.skills.map((skill, idx) => {
                      return (
                        <h1
                          key={idx}
                          className={`m-2 px-2 py-0.5 w-max rounded-4xl
                            ${
                              isDarkMode
                                ? "bg-[#9a006543] group-hover:bg-[#9a0065f3] text-[]"
                                : "bg-[#b5fffd70] group-hover:bg-[#85fffd] group-hover:text-[#006] text-[#0008]"
                            }   font-light tracking-wider md:text-[0.9rem] text-[0.8rem] font-(family-name:--font-oswald) transition-all duration-75 ease-in-out`}
                        >
                          {skill}
                        </h1>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      </div>
      <BtnHome />
    </div>
  );
}
