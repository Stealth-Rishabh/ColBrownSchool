export const clubsData = {
  "All Clubs": [], // This will be populated dynamically
  "DJ Night Club": [
    {
      id: "dj-night-club",
      title: "DJ Night Club",
      image: "https://v0.dev/placeholder.svg",
      gallery: [],
      description: `Experience electrifying nights with live DJs, dance music, and an energetic atmosphere for all music lovers.`,
      date: "March 15, 2024",
      photoCount: 8,
      href: "#",
    },
    // Add more IT Club specific events...
  ],
  "Expression Club": [
    {
      id: "expression-club",
      title: "Expression Club",
      image: "https://v0.dev/placeholder.svg",
      gallery: [],
      description: `A creative space for students to develop public speaking, debate and presentation skills.`,
      date: "April 20, 2024",
      photoCount: 12,

      href: "#",
    },
    // Add more Marketing Club specific events...
  ],
  "Media Club": [
    {
      id: "media-club",
      title: "Media Club",
      image: "https://v0.dev/placeholder.svg",
      gallery: [],
      description: `A platform for students to explore photography, videography, and digital content creation.`,
      date: "February 28, 2024",
      photoCount: 6,
      href: "#",
    },
    // Add more Finance Club specific events...
  ],
  "Music Club": [
    {
      id: "music-club",
      title: "Music Club",
      image: "https://v0.dev/placeholder.svg",
      gallery: [],
      description: `Join fellow music enthusiasts to learn instruments, perform together, and share your passion for melody.`,
      date: "March 15, 2024",
      photoCount: 10,

      href: "#",
    },
    // Add more HR Club specific events...
  ],
  "Party Club": [
    {
      id: "party-club",
      title: "Party Club",
      image: "https://v0.dev/placeholder.svg",
      gallery: [],
      description: `A social club focused on organizing fun events, celebrations and fostering campus community spirit.`,
      date: "March 30, 2024",
      photoCount: 7,
      href: "#",
    },
    // Add more Operations Club specific events...
  ],
  "Soft Skills Club": [
    {
      id: "soft-skills-club",
      title: "Soft Skills Club",
      image: "https://v0.dev/placeholder.svg",
      gallery: [],
      description: `A club dedicated to enhancing students' soft skills, including communication, teamwork, and problem-solving.`,
      date: "March 22, 2024",
      photoCount: 5,

      href: "#",
    },
    // Add more Soft Skills Club specific events...
  ],
};

// Populate "All Clubs" with events from all other clubs
clubsData["All Clubs"] = Object.entries(clubsData)
  .filter(([clubName]) => clubName !== "All Clubs")
  .flatMap(([_, events]) => events);
