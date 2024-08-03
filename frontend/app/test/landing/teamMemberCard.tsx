import Image from "next/image";
import React from "react";

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  avatar: string;
}

const TeamMemberCard: React.FC<TeamMember> = ({ name, title, bio, avatar }) => {
  return (
    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white w-100 mb-5">
      <div className="flex-shrink-0 p-2">
        <Image
          src={avatar}
          alt={name}
          width={100}
          height={100}
          className="w-24 h-24 rounded-full object-cover"
        />
      </div>
      <div className="p-4 flex-1">
        <p className="text-xl font-semibold text-gray-800 mb-2">
          {name} - {title}
        </p>
        <p className="text-gray-600">{bio}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
