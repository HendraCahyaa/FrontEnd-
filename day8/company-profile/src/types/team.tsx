export interface Team {
  name: {
    first: string;
    last: string;
  };
  role: string;
  bio: string;
  picture: {
    large: string;
  };
}

export interface RandomUserResponse {
  results: Team[];
}
export const teamRoles = [
  {
    role: "CEO & Founder",
    bio: "Leads the company vision and drives long-term business growth.",
  },
  {
    role: "CTO",
    bio: "Leads technology strategy and builds scalable digital solutions.",
  },
  {
    role: "UI/UX Designer",
    bio: "Creates intuitive and engaging digital experiences for users.",
  },
  {
    role: "Frontend Developer",
    bio: "Builds modern and responsive interfaces using React and TypeScript.",
  },
  {
    role: "Backend Developer",
    bio: "Develops reliable APIs and scalable backend infrastructure.",
  },
  {
    role: "Product Manager",
    bio: "Translates business requirements into meaningful product experiences.",
  },
  {
    role: "Marketing Manager",
    bio: "Develops strategies to strengthen the brand and reach new audiences.",
  },
  {
    role: "QA Engineer",
    bio: "Ensures product quality through testing and continuous improvement.",
  },
];
