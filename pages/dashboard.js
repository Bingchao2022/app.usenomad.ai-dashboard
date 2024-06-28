import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Card from '../components/Card';
import Modal from '../components/Modal';

const Dashboard = () => {
  const [cards, setCards] = useState([
    { title: 'Total Bank Accounts', value: '$2,001.00' },
    { title: 'Accounts Receivable', value: '$5,281.52' },
    { title: 'Total Other Current Assets', value: '$2,658.77' },
    { title: 'Total Fixed Assets', value: '$13,495.00' },
    { title: 'Total Liabilities', value: '$31,131.33' },
    { title: 'Total Equity', value: '-$7,695.04' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const addCard = (title, value) => {
    const newCard = { title, value };
    setCards([...cards, newCard]);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 min-h-screen bg-gray-100">
        <Header />
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <Card key={index} title={card.title} value={card.value} />
            ))}
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-500 text-white p-3 rounded mt-6 hover:bg-blue-600 transition-colors duration-300"
          >
            Add Card
          </button>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={addCard}
      />
    </div>
  );
};

export default Dashboard;
