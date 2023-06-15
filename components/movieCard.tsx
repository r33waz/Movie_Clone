import React from "react";

interface MovieCardProps {
  title: string;
  release_date: string;
  poster_path: string;
  vote_count: number;
}

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  release_date,
  poster_path,
  vote_count,
}) => {
  return (
    <div className="overflow-hidden rounded shadow-2xl">
      <img className="w-full" src={poster_path} alt={title} />
      <div className="">
        <div className="mb-2 text-xl text-white font-weight-bold">{title}</div>
        <div className="text-base text-white">Release Year: {release_date}</div>
        <div>
          <p className="mb-2 text-base text-white">Vote: {vote_count}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
