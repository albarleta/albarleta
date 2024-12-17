import { LiaBookSolid } from "react-icons/lia";
import { MdPodcasts } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { GiWeightLiftingUp } from "react-icons/gi";
import { PiAlien } from "react-icons/pi";
import { GiGuitarBassHead } from "react-icons/gi";
import { FaCat } from "react-icons/fa";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const interestsDetails = {
  Books: {
    favorites: [
      "The Great Mental Models by Shane Parrish",
      "What Technology Wants by Kevin Kelly",
      "Blue Ocean Strategy by W. Chan Kim",
    ],
  },
  Podcasts: {
    favorites: ["Lex Fridman", "Joe Rogan", "Tom Bilyeu"],
  },
  Technology: {
    favorites: ["Web Development", "AI", "Futurism"],
  },
  "Science Fiction": {
    favorites: ["Foundation", "The Expanse", "Black Mirror"],
  },
  "Weight Lifting": {
    favorites: ["Strength Training", "Progressive Overload"],
  },
  Music: {
    favorites: ["Radiohead", "Deftones", "Mew"],
  },
  Cats: {
    favorites: ["British Shorthair", "Persian"],
  },
};

const interests = [
  { icon: <LiaBookSolid className="text-[#34b4ea]" />, label: "Books" },
  { icon: <MdPodcasts className="text-[#34b4ea]" />, label: "Podcasts" },
  { icon: <GrTechnology className="text-[#34b4ea]" />, label: "Technology" },
  { icon: <PiAlien className="text-[#34b4ea]" />, label: "Science Fiction" },
  {
    icon: <GiWeightLiftingUp className="text-[#34b4ea]" />,
    label: "Weight Lifting",
  },
  {
    icon: <GiGuitarBassHead className="text-[#34b4ea]" />,
    label: "Music",
  },
  {
    icon: <FaCat className="text-[#34b4ea]" />,
    label: "Cats",
  },
];

export default function Interests() {
  return (
    <ul className="text-slate-600 flex gap-3 flex-wrap">
      {interests.map((interest, index) => (
        <li key={index}>
          <HoverCard>
            <HoverCardTrigger className="flex items-center gap-2 bg-slate-200 px-2 rounded-full">
              {interest.icon} {interest.label}
            </HoverCardTrigger>
            <HoverCardContent className="p-4">
              <div className="flex items-start gap-4">
                <div className="text-3xl text-[#34b4ea] mt-1">
                  {interest.icon}
                </div>
                <div>
                  <h3 className="font-bold mb-2 text-[#34b4ea]">Favorites</h3>
                  <ul className="space-y-1">
                    {interestsDetails[interest.label].favorites.map(
                      (favorite, idx) => (
                        <li key={idx} className="text-sm text-slate-700">
                          • {favorite}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </li>
      ))}
    </ul>
  );
}
