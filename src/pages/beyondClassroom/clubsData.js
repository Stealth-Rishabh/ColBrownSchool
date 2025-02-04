import djnight1 from "../../assets/beyond-classroom/clubs/djnight/djnight (1).webp";
import djnight2 from "../../assets/beyond-classroom/clubs/djnight/djnight (2).webp";
import djnight3 from "../../assets/beyond-classroom/clubs/djnight/djnight (3).webp";
import djnight4 from "../../assets/beyond-classroom/clubs/djnight/djnight (4).webp";
import djnight5 from "../../assets/beyond-classroom/clubs/djnight/djnight (5).webp";
import expression1 from "../../assets/beyond-classroom/clubs/expression/expression (1).webp";
import expression2 from "../../assets/beyond-classroom/clubs/expression/expression (2).webp";
import media1 from "../../assets/beyond-classroom/clubs/media/media (1).webp";
import media2 from "../../assets/beyond-classroom/clubs/media/media (2).webp";
import media3 from "../../assets/beyond-classroom/clubs/media/media (3).webp";
import media4 from "../../assets/beyond-classroom/clubs/media/media (4).webp";
import media5 from "../../assets/beyond-classroom/clubs/media/media (5).webp";
import media6 from "../../assets/beyond-classroom/clubs/media/media (6).webp";
import media7 from "../../assets/beyond-classroom/clubs/media/media (7).webp";
import media8 from "../../assets/beyond-classroom/clubs/media/media (8).webp";
import media9 from "../../assets/beyond-classroom/clubs/media/media (9).webp";
import media10 from "../../assets/beyond-classroom/clubs/media/media (10).webp";
import media11 from "../../assets/beyond-classroom/clubs/media/media (11).webp";
import music1 from "../../assets/beyond-classroom/clubs/music/music (1).webp";
import music2 from "../../assets/beyond-classroom/clubs/music/music (2).webp";
import music3 from "../../assets/beyond-classroom/clubs/music/music (3).webp";
import music4 from "../../assets/beyond-classroom/clubs/music/music (4).webp";
import music5 from "../../assets/beyond-classroom/clubs/music/music (5).webp";
import music6 from "../../assets/beyond-classroom/clubs/music/music (6).webp";
import party1 from "../../assets/beyond-classroom/clubs/party/party (1).webp";
import party2 from "../../assets/beyond-classroom/clubs/party/party (2).webp";
import party3 from "../../assets/beyond-classroom/clubs/party/party (3).webp";
import party4 from "../../assets/beyond-classroom/clubs/party/party (4).webp";
import party5 from "../../assets/beyond-classroom/clubs/party/party (5).webp";
import softSkills1 from "../../assets/beyond-classroom/clubs/soft-skills/soft-skills (1).webp";
import softSkills2 from "../../assets/beyond-classroom/clubs/soft-skills/soft-skills (2).webp";
import softSkills3 from "../../assets/beyond-classroom/clubs/soft-skills/soft-skills (3).webp";
import softSkills4 from "../../assets/beyond-classroom/clubs/soft-skills/soft-skills (4).webp";
import softSkills5 from "../../assets/beyond-classroom/clubs/soft-skills/soft-skills (5).webp";
import softSkills6 from "../../assets/beyond-classroom/clubs/soft-skills/soft-skills (6).webp";

export const clubsData = {
  "All Clubs": [], // This will be populated dynamically
  "DJ Night Club": [
    {
      id: "dj-night-club",
      title: "DJ Night Club",
      image: djnight4,
      gallery: [djnight1, djnight2, djnight3, djnight4, djnight5],
      description: `Experience electrifying nights with live DJs, dance music, and an energetic atmosphere for all music lovers.`,
      date: "March 15, 2024",
      photoCount: 5,
      href: "#",
    },
    // Add more IT Club specific events...
  ],
  "Expression Club": [
    {
      id: "expression-club",
      title: "Expression Club",
      image: expression2,
      gallery: [expression1, expression2],
      description: `A creative space for students to develop public speaking, debate and presentation skills.`,
      date: "April 20, 2024",
      photoCount: 2,

      href: "#",
    },
    // Add more Marketing Club specific events...
  ],
  "Media Club": [
    {
      id: "media-club",
      title: "Media Club",
      image: media11,
      gallery: [
        media1,
        media2,
        media3,
        media4,
        media5,
        media6,
        media7,
        media8,
        media9,
        media10,
        media11,
      ],
      description: `A platform for students to explore photography, videography, and digital content creation.`,
      date: "February 28, 2024",
      photoCount: 11,
      href: "#",
    },
    // Add more Finance Club specific events...
  ],
  "Music Club": [
    {
      id: "music-club",
      title: "Music Club",
      image: music1,
      gallery: [music1, music2, music3, music4, music5, music6],
      description: `Join fellow music enthusiasts to learn instruments, perform together, and share your passion for melody.`,
      date: "March 15, 2024",
      photoCount: 6,
      href: "#",
    },
    // Add more HR Club specific events...
  ],
  "Party Club": [
    {
      id: "party-club",
      title: "Party Club",
      image: party1,
      gallery: [party1, party2, party3, party4, party5],
      description: `A social club focused on organizing fun events, celebrations and fostering campus community spirit.`,
      date: "March 30, 2024",
      photoCount: 5,
      href: "#",
    },
    // Add more Operations Club specific events...
  ],
  "Soft Skills Club": [
    {
      id: "soft-skills-club",
      title: "Soft Skills Club",
      image: softSkills3,
      gallery: [softSkills1, softSkills2, softSkills3, softSkills4, softSkills5, softSkills6],
      description: `A club dedicated to enhancing students' soft skills, including communication, teamwork, and problem-solving.`,
      date: "March 22, 2024",
      photoCount: 6,
      href: "#",

    },
    // Add more Soft Skills Club specific events...
  ],
};

// Populate "All Clubs" with events from all other clubs
clubsData["All Clubs"] = Object.entries(clubsData)
  .filter(([clubName]) => clubName !== "All Clubs")
  .flatMap(([_, events]) => events);
