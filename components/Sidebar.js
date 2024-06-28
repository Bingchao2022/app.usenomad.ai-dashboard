// components/Sidebar.js
import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="bg-gray-900 text-white w-64 min-h-screen p-4">
      <div className="text-lg font-bold mb-4">Overview</div>
      <ul>
        <li className="mb-4">
          <Link href="/dashboard" legacyBehavior>
            <a className="hover:text-gray-400">Dashboard</a>
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/profile" legacyBehavior>
            <a className="hover:text-gray-400">Profile</a>
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/integrations" legacyBehavior>
            <a className="hover:text-gray-400">Integrations</a>
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/ai-advisors" legacyBehavior>
            <a className="hover:text-gray-400">AI Advisors</a>
          </Link>
        </li>
      </ul>
      <div className="mt-auto">
        <div className="bg-gray-700 p-4 rounded">
          <h3 className="font-bold">Upgrade to Pro</h3>
          <p>Unlock all features and get unlimited access to our support team.</p>
          <button className="mt-2 bg-blue-500 text-white p-2 rounded">Upgrade</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
