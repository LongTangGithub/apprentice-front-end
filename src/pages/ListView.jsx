import React from 'react';

const mockData = [
  {
    id: 1,
    name: 'John Doe',
    headline: 'Passionate Visual Artist',
    jobTitle: 'Graphic Designer',
    company: 'Design Co.',
    location: 'New York, NY',
    contact: 'john@example.com',
  },
  {
    id: 2,
    name: 'Jane Smith',
    headline: 'Aspiring Performing Artist',
    jobTitle: 'Dancer',
    company: 'City Ballet',
    location: 'Los Angeles, CA',
    contact: 'jane@example.com',
  },
  {
    id: 3,
    name: 'Alex Johnson',
    headline: 'Multimedia Enthusiast',
    jobTitle: 'Video Editor',
    company: 'Media Studios',
    location: 'Chicago, IL',
    contact: 'alex@example.com',
  },
  {
    id: 4,
    name: 'Abhi',
    headline: 'Homosexual Enthusiast',
    jobTitle: 'Pornography Historian',
    company: 'Self-Employed',
    location: 'Philadelphia, PA',
    contact: 'ilikemen@example.com',
  },
  {
    id: 5,
    name: 'Michael Lee',
    headline: 'Aspiring Actor',
    jobTitle: 'Theater Performer',
    company: 'StageCraft Theater',
    location: 'Boston, MA',
    contact: 'michael@example.com',
  },
];


const ListView = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <div className="flex bg-gray-200 py-2 px-4 font-bold text-gray-700">
        <div className="w-1/5">Name</div>
        <div className="w-1/5">Headline & Job Title</div>
        <div className="w-1/5">Company</div>
        <div className="w-1/5">Location</div>
        <div className="w-1/5">Contact</div>
      </div>

      {/* Data rows */}
      {mockData.map((row) => (
        <div key={row.id} className="flex border-b py-2 px-4">
          <div className="w-1/5">{row.name}</div>
          <div className="w-1/5">
            <p className="font-bold">{row.headline}</p>
            <p>{row.jobTitle}</p>
          </div>
          <div className="w-1/5">{row.company}</div>
          <div className="w-1/5">{row.location}</div>
          <div className="w-1/5">{row.contact}</div>
        </div>
      ))}
    </div>
  );
};

export default ListView;
