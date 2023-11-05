import React from 'react';

const TrackerTable = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
            >
              Location
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
            >
              Method
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
            >
              Category
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase"
            >
              Looted Money
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase"
            >
              Date
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase"
            >
              Age Group
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase"
            >
              Links/Sources
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase"
            >
              Victim Count
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase"
            >
              Status
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase"
            >
              Reporting Authority
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase"
            >
              Modus Operandi
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((entry, index) => (
            <tr key={index}>
              <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                {entry.Location}
              </td>
              <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                {entry.Method}
              </td>
              <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                {entry.Category}
              </td>
              <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                {entry['Looted Money']}
              </td>
              <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                {entry.Date}
              </td>
              <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                {entry['Age Group']}
              </td>
              <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                <a
                  href={entry['Links/Sources']}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source
                </a>
              </td>
              <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                {entry['Victim Count']}
              </td>
              <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                {entry.Status}
              </td>
              <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                {entry['Reporting Authority']}
              </td>
              <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                {entry['Modus Operandi']}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrackerTable;
