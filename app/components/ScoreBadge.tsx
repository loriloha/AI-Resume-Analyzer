import React from "react";

interface ScoreBadgeProps {
  score: number;
}

const ScoreBadge = ({ score }: ScoreBadgeProps) => {
  const isStrong = score > 69;
  const isGood = score > 49 && score <= 69;

  const bgClass = isStrong
    ? "bg-badge-green"
    : isGood
    ? "bg-badge-yellow"
    : "bg-badge-red";

  const textClass = isStrong ? "text-green-600" : isGood ? "text-yellow-600" : "text-red-600";

  const label = isStrong ? "Strong" : isGood ? "Good Start" : "Needs Work";

  return (
    <div className={`inline-flex items-center px-2 py-1 rounded-full ${bgClass}`}>
      <p className={`${textClass} text-sm font-medium`}>{label}</p>
    </div>
  );
};

export default ScoreBadge;
