"use client";
import BtnHome from "@/components/BtnHome";
import NavBar from "@/components/NavBar";
import { useTranslations } from "next-intl";
import "@/app/[locale]/index.css";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
      jpg: "datascience",
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
      jpg: "azure",
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
      jpg: "uipath",
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
      name: "Meta Front-End Developer",
      jpg: "frontend",
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
      jpg: "react",
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
    {
      name: "Fintech: Foundations & Applications of Financial Technology",
      jpg: "fintech",
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
  ];

  const delayClasses = [
    `animate-delay-[800ms]`,
    `animate-delay-[900ms]`,
    `animate-delay-[1000ms]`,
    `animate-delay-[1100ms]`,
    `animate-delay-[1200ms]`,
    `animate-delay-[1300ms]`,
  ];

  const skills = t("exp1_skills").split(", ");
  const skills2 = t("exp2_skills").split(", ");
  const skillsStyle = `m-2 px-2 rounded-xl text-[0.8em] ${
    isDarkMode ? "bg-amber-900" : "bg-amber-300"
  }`;
  const expStyle =
    "flex md:flex-row flex-col justify-center items-start md:py-2 md:m-4 mb-2 font-(family-name:--font-teko) font-light";
  const exp_desc = "text-start md:w-[75%] ml-4";
  const h1_style = "text-[1.5em] font-normal tracking-wider";
  const p_style = "";
  const date_style = "opacity-80 text-[1.1em] md:mt-1";

  return (
    <div className="div-parent-scrolled relative flex flex-col justify-between items-end text-center font-(family-name:--font-bebas)">
      <NavBar />
      <div className="w-full md:p-0 bg-[#8880] animate-fade-down animate-ease-in-out animate-delay-200">
        <section className="flex md:flex-row flex-col px-6 md:h-[34rem] pb-12 font-(family-name:--font-bebas) bg-linear-to-b from-transparent to-teal-900/30">
          <div className=" flex flex-col justify-between md:w-[50%] w-full text-start md:px-2 md:order-2 order-1 animate-fade-down animate-delay-[900ms]">
            <section className="md:self-end md:mb-0 mb-8 mt-6 md:mt-0">
              <h1 className="md:text-[4rem] text-[3.4rem] tracking-widest font-bold">
                Jose Navarro
              </h1>
              <h2 className="font-extralight opacity-70 text-[1.4em] -mt-4">
                <a
                  href="https://validaciones.unimagdalena.edu.co/?id=H9*GOTGjWC0!"
                  target="blank"
                >
                  {t("title1")}
                </a>
              </h2>
              <h3 className="opacity-70">Universidad del Magdalena</h3>
              <h4 className="opacity-70">{t("dategrade")}</h4>
            </section>
            <h1 className="md:text-7xl text-5xl md:m-4 md:mb-8 text-start font-(family-name:--font-teko) tracking-wide opacity-70">
              {t("title")}
            </h1>
          </div>
          <div className="flex flex-col justify-evenly md:p-4  text-[1.2rem] text-justify md:w-[50%] order-2 md:order-1 font-extralight font-(family-name:--font-teko) animate-fade-up animate-delay-[980ms]">
            <p>{t("description1")}</p>
            <p>{t("description2")}</p>
            <p>{t("description3")}</p>
          </div>
        </section>
        <section className="flex md:flex-row flex-col px-2 md:h-[60rem] pt-12 font-(family-name:--font-bebas) bg-linear-to-b from-teal-900/30 to-purple-900/30">
          <div className=" flex flex-col justify-start md:items-end md:w-[50%] w-full text-start md:px-2 animate-fade-down animate-delay-[900ms]">
            <h1
              className="md:text-7xl text-6xl m-4 mb-8 text-start md:w-[50%] font-(family-name:--font-teko) tracking-wide"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="800"
            >
              {t("experiences")}
            </h1>
          </div>
          <div className="flex flex-col p-4 text-[1.2rem] text-justify md:w-[50%] font-light animate-fade-up animate-delay-[980ms]">
            <div
              className={`${expStyle} md:mb-0 mb-14`}
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="800"
            >
              <h2 className={date_style}>{t("date1")}</h2>
              <div className={exp_desc}>
                <h1 className={h1_style}>
                  {t("exp1")} -
                  <span className="text-2xl opacity-70">{t("university")}</span>
                </h1>
                <p className={p_style}>{t("exp1_descr")}</p>

                <div className="flex flex-row flex-wrap">
                  {skills.map((skill) => {
                    return (
                      <h1 key={skill} className={skillsStyle}>
                        {skill}
                      </h1>
                    );
                  })}
                </div>
              </div>
            </div>

            <div
              className={expStyle}
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="800"
            >
              <h2 className={date_style}>{t("date2")}</h2>
              <div className={exp_desc}>
                <h1 className={h1_style}>
                  {t("exp2")} -
                  <span className="text-xl inline opacity-70">
                    {t("empre1")}
                  </span>
                </h1>
                <p className={p_style}>{t("exp2_descr")}</p>

                <div className="flex flex-row flex-wrap">
                  {skills2.map((skill) => {
                    return (
                      <h1 key={skill} className={skillsStyle}>
                        {skill}
                      </h1>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex md:flex-row flex-col px-2 md:h-max pt-12 font-(family-name:--font-bebas) bg-linear-to-b from-purple-900/30 to-red-900/30">
          <h1
            className="md:order-2 order-1 md:p-8  md:text-5xl text-6xl md:mb-8 text-start md:w-[50%] font-(family-name:--font-teko) tracking-wide"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="800"
          >
            {t("certificates")}
          </h1>
          <div className="md:p-4 md:order-1 -mt-8 order-2 md:w-[50%]">
            {certs.map((cert, index) => {
              return (
                <div
                  key={cert.url}
                  // data-aos="zoom-in-up"
                  // data-aos-delay="50"
                  // data-aos-duration="800"
                  onClick={() =>
                    window.open(cert.url, "_blank", "noopener,noreferrer")
                  }
                  className="flex md:flex-row flex-col md:mt-0 mt-12 md:h-max cursor-pointer cursor-interactive md:justify-between justify-center flex-wrap w-full overflow-hidden items-center md:mb-2 md:py-0 py-8 md:px-0 px-2"
                >
                  <div className="relative w-[55%] md:w-[14rem] md:h-[20rem] h-[16rem] overflow-hidden rounded-md">
                    <Image
                      src={`/certs/${cert.jpg}.jpg`}
                      alt={cert.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div
                    className={`flex flex-col justify-center items-start md:h-[28rem] h-[24rem] md:w-[25rem] w-full
                    md:my-4 md:mr-2 md:p-2 text-start rounded-md
                     ${delayClasses[index]} cursor-pointer cursor-interactive transition-all duration-300 group`}
                  >
                    <section
                      className={`flex flex-col md:w-full w-full md:h-[8rem] h-[5.5em] justify-center items-start px-2 rounded-md ${
                        isDarkMode
                        // ? "bg-linear-to-b from-transparent from-0% via-[#9a006543] via-10% group-hover:via-[#6a0045f3] group-hover:from-[#6a0045f3] to-[#0a0a0a00] to-95%"
                        // : "bg-linear-to-b from-transparent from-0% via-[#b5fffd70] via-10% group-hover:via-[#85fffd] group-hover:from-[#85fffd] to-[#0000] to-95%"
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
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
      <footer className="h-max py-24 md:text-[1.5rem] text-[1.4em] justify-center flex flex-row items-center bg-linear-to-b from-red-900/30 to-red-900/40 md:w-full font-(family-name:--font-teko)">
        <Link
          href="/contact"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="800"
          className="ml-2 italic w-full"
        >
          {t("footer_contact_phrase")}{" "}
          <span className="px-2 font-extrabold tracking-widest transition-all duration-300 text-[1.5rem] uppercase border-b-2">
            {t("contact")}
          </span>
        </Link>
      </footer>
      <BtnHome />
    </div>
  );
}
