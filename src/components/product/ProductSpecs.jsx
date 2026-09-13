import React from 'react';

export const ProductSpecs = ({ specifications = {} }) => {
  const entries = Object.entries(specifications);

  if (entries.length === 0) {
    return <p className="text-xs text-slate-500 italic">No technical specifications listed for this product.</p>;
  }

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200">
      <table className="w-full text-xs text-left border-collapse">
        <tbody>
          {entries.map(([key, value], index) => (
            <tr
              key={key}
              className={index % 2 === 0 ? 'bg-slate-50/70' : 'bg-white'}
            >
              <td className="px-4 py-3 font-semibold text-slate-700 w-1/3 border-r border-slate-200">
                {key}
              </td>
              <td className="px-4 py-3 text-slate-600 font-medium">
                {value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
