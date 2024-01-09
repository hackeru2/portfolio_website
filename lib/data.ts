import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import adminPng from "../public/admin.png";
import myMedicalOwl from "../public/myMedicalOwl.png";
import mySocialNetwork from "../public/MySocialNetwork.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "HackerU College",
    location: "Ramat-Gan, IL",
    description:
      "I graduated after 1.5 years of studying. I immediately found a job as a fullstack developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2017",
  },
  {
    title: "Fullstack Developer",
    location: "Tel-Aviv, IL",
    description:
      "I worked as a fullstack developer for 4.5 years in one job and +1 in another job. I also upskilled to the dev-ops, involving in side projects.",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2024",
  },
  {
    title: "Full-Stack Developer",
    location: "Hertzelia, IL",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Vue.js, Laravel, Node.js Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "SerenusAI admin system",
    description:
      "I worked as a full-stack developer on this startup project for 4.5 years. Users can edit and analyze medical procedures.",
    tags: ["react", "vue.js", "mysql", "MongoDB", "Laravel", "Vuex"],
    imageUrl: adminPng,
  },
  {
    title: "My Medical Owl",
    description:
      "B2C system for patiens. I was the FullStack developer. It has features like procedure evaluation, payments and meeting schedules.",
    tags: ["Laravel", "React", "PayPal", "MySQL", "OAuth 2ץ0"],
    imageUrl: myMedicalOwl,
  },
  {
    title: "My Social Network",
    description:
      "A mobile app for find jobs and post comments (same as linkedin) . It shows word likes, comments, image uploading and a quick search bar.",
    tags: ["Expo + React Natvie", "Neon", "Clerck", "Apollo", "PostgreSql"],
    imageUrl: mySocialNetwork,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Laravel",
  "PHP",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Vite",
  "MongoDB",
  "MySQL",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Amplify",
] as const;
