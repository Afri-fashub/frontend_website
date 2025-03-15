import React from 'react';
import { Link } from 'react-router-dom';
import MaleHubCard from './MaleHubCard';
import maleHubData from '../../../Data/data'; // Import the array

const MaleHubCardList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {maleHubData.map((maleHubItem) => (
        <Link key={maleHubItem.id} to={`/male/${maleHubItem.id}`}>
          <MaleHubCard maleHubItem={maleHubItem} />
        </Link>
      ))}
    </div>
  );
};

export default MaleHubCardList;

