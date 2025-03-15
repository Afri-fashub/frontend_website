import React from 'react'
import FemaleHubCard from './FemaleHubCard';
import useFetchData from '../../../hooks/useFetchData';
import femaleHubData from '../../../Data/data2'; // Import the array
import { Link } from 'react-router-dom';


const FemaleHubCardList = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {femaleHubData.map((femaleHubItem) => (
        <Link key={femaleHubItem.id}>
          <FemaleHubCard femaleHubItem={femaleHubItem} />
        </Link>
      ))}
    </div>
    );
  };
  
  export default FemaleHubCardList;
  