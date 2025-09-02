export interface PersonalInfo {
  name: string
  title: string
  photo: string
  email: string
  phone: string
  location: string
  description: string
  socialLinks: {
    github: string
    linkedin: string
  }
}

export interface ProfileData {
  personalInfo: PersonalInfo
  skills: string[]
}

export interface Experience {
  id: number
  position: string
  company: string
  startDate: string
  endDate: string
  responsibilities: string[]
}

export interface ExperienceData {
  experience: Experience[]
}

export interface Education {
  id: number
  title: string
  institution: string
  startDate: string
  endDate: string
  description: string
}

export interface EducationData {
  education: Education[]
}

export interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
}

export interface PortfolioData {
  projects: Project[]
}
