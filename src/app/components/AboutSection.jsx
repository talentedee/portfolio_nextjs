"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Software Engineer III",
    id: "III",
    content: (
      <ul className="list-disc pl-2">
        <li>Utilized <b>Pandas</b> and <strong>NumPy</strong> for manipulation and analysis of large datasets, enhancing data processing speed by 40%</li>
        <li>Developed <b>Python</b> scripts with <b>Selenium</b> to automate firmware testing of radios, achieving a 33% reduction in test time</li>
        <li>Created a <b>C#</b> application with hundreds of automated test cases with the NUnit framework, packaged with Microsoft <b>.NET</b> into an executable using an NSIS script, providing comprehensive result summaries, saving 80 man-hours of test a month</li>
        <li>Recognized with L3Harris e3 award for automating testing on a wide range of <b></b>TTL devices operating over <b>Iridium</b> and <b></b>Globalstar satellite constellations</li>
        <li>Implemented streamlined <b>Jenkins</b> builds and deployment to staging servers using <b></b>Ansible, while orchestrating containerized <b>Docker</b> images of microservices with Kubernetes, reducing manual deployment time by 50%</li>
        <li>Designed and built Jenkins multi-branch pipelines, enabled with webhooks and scanning for feature and bug branches, improving CI/CD throughput to accept 100% of all commit types</li>
      </ul>
    ),
  },
  {
    title: "SI&T Engineer II",
    id: "II",
    content: (
      <ul className="list-disc pl-2">
        <li>Led a team of four engineers in delivering software releases and deploying systems, improving team efficiency by 25% while providing <b>REST API</b> testing support using <b>Postman</b></li>
        <li>Optimized sharded <b>ZooKeeper</b> system for <b>Solr</b> with <b>PostgreSQL</b>, increasing query handling from 2,500 to 9,000 queries/s</li>
        <li>Created <b>Bash</b> test scripts to automate command entry, saving 20% of test time and improving accuracy</li>
        <li>Built <b>Java</b> app with Mockito and Maven, utilizing <b>AWS Lambda</b> and <b>Amazon S3</b>, to identify 20% of lowest performing disks</li>
        <li>Supported development of FAA ASTI program with C++ for Mux cards and programming embedded op-codes on EEPROMs</li>
        <li>Streamlined tracking by utilizing <b>JIRA</b> with Xray and Zephyr for reports, defects, requirements, plans, and executions</li>
        <li>Managed two labs, served as the system expert, and integrated new equipment, while establishing processes</li>
      </ul>
    ),
  },
  {
    title: "SI&T Engineer I",
    id: "I",
    content: (
      <ul className="list-disc pl-2">
        <li>Troubleshot, integrated, and tested various components of the ASTI infrastructure such as multiplexer cards, antennas, amplifiers (BUCs/SSPAs), analog and digital circuits, modem switches, and routers saving 50% of the project man-hours</li>
        <li>Tested with <b>RF</b> equipment such as bit error injectors, oscilloscopes, signal generators, and spectrum analyzers</li>
        <li>Planned over 30 tests based on CONOPS/SME feedback and provided detailed test status reports with Splunk</li>
        <li>Wrote 10 major formal tests and interfaced directly with the FAA on a daily basis to meet system requirements</li>
      </ul>
    ),
  },
  {
    title: "Intern",
    id: "intern",
    content: (
      <ul className="list-disc pl-2">
        <li>Configured network equipment through routing protocols such as TCP/IP, DHCP, and DNS for 75% of remote sites</li>
        <li>Coded in <b>PHP</b> and <b>JavaScript</b>, logic to generate 25 different <b>SNMP</b> and analog alarms in the T-Mon monitoring system</li>
        <li>Implemented a <b>Python</b> script that extracts live log data from 50 UDP only gas generators to support SNMP traps</li>
        <li>Ran queries of <b>SQL</b> through <b>PowerShell</b> and <b>Bash</b> against WMI servers to select processes and generate 5 alarm types</li>
      </ul>
    ),
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li><b>Programming:</b> Java, Python, C, C++, C#, JavaScript, ReactJS, PHP, SQL, Matlab, Linux, Jenkins, Docker, Git, GitLab, Bitbucket</li>
        <li><b>Project Management:</b> Design proposals (RFP for a CubeSat Project), Technical Reports, Test Plans, Presentations (Test Readiness Reviews), SDLC, JIRA, Gantt Charts, Agile, Scrum Master, Open-Source, DevOps Pipelines</li>
        <li><b>Relevant Coursework:</b> Data Structures and Algorithms, C Programming, Assembly Language, Computer Architecture</li>
        <li><b>Relevant Projects:</b> Launched a test web app with ReactJS and Firebase that can process real-time payments with Stripe</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li><b>Master of Science: Space Systems Engineering</b>, Florida Institute of Technology - GPA 3.9/4			             Aug 2020</li>
        <li><b>Bachelor of Science: Electrical Engineering</b>, Minor in Math/Physics, University of Alaska Anchorage - GPA 3.4/4           Dec 2016</li>
      </ul>
    ),
  },
  /*{
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },*/
];

const AboutSection = () => {
  const [tab, setTab] = useState("III");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image className="self-start" src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            software. Professional experience below:
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("III")}
              active={tab === "III"}
            >
              {" "}
              Software Engineer III{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("II")}
              active={tab === "II"}
            >
              {" "}
              SI&T Engineer II{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("I")}
              active={tab === "I"}
            >
              {" "}
              SI&T Engineer I{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("intern")}
              active={tab === "intern"}
            >
              {" "}
              Intern{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            {/*<TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>*/}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
