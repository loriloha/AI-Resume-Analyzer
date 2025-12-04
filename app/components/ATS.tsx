import React from "react";

type Suggestion = { type: "good" | "improve"; tip: string };

interface ATSProps {
  score: number;
  suggestions: Suggestion[];
}

const ATS = ({ score, suggestions }: ATSProps) => {
  const isStrong = score > 69;
  const isGood = score > 49 && score <= 69;

  const fromClass = isStrong
    ? "from-green-100"
    : isGood
      ? "from-yellow-100"
      : "from-red-100";

  const icon = isStrong
    ? "/icons/ats-good.svg"
    : isGood
      ? "/icons/ats-warning.svg"
      : "/icons/ats-bad.svg";

  return (
    <div
      className={`rounded-2xl p-4 bg-gradient-to-r ${fromClass} via-white to-white shadow-md`}
    >
      <div className="flex items-center gap-4">
        <img src={icon} alt="ats icon" className="w-10 h-10" />
        <div>
          <h2 className="font-semibold">ATS Score - {score}/100</h2>
          {/* <p className="text-sm text-gray-500">
            How likely your resume is to pass an Applicant Tracking System
          </p> */}
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-md font-bold">{score>69? "Great Job!": score>49?"Good Start": "Needs Improvement"}</h3>
        <p className="text-sm text-gray-500">
          This score represents how well your resume is likely to perform in Applicant Tracking Systems used by employers.
        </p>

        <ul className="mt-3 space-y-2">
          {suggestions.map((s, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <img
                src={
                  s.type === "good" ? "/icons/check.svg" : "/icons/warning.svg"
                }
                alt={s.type === "good" ? "good" : "improve"}
                className="w-5 h-5 mt-1 "
              />
              <p className={s.type === "good"? "text-sm text-green-700": "text-sm text-red-700"}>{s.tip}</p>
            </li>
          ))}
        </ul>

        <p className="mt-4 text-sm text-gray-500">
          Keep iterating — small changes can increase your ATS match rate.
        </p>
      </div>
    </div>
  );
};

export default ATS;

