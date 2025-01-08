import React from 'react'
import FemaleHubCard from './FemaleHubCard';
import useFetchData from '../../../hooks/useFetchData';
import { Link } from 'react-router-dom';

const FemaleHubCardList = () => {
    const url = 'http://localhost:7000/femalehub';
    const {data: femaleHub, loading, error} = useFetchData(url);

    const femaleHubList = femaleHub?.map((femaleHubItem, index) => {
        return (
            <Link key={femaleHubItem?.id} to={`${femaleHubItem?.id}`}>
                <FemaleHubCard femaleHubItem={femaleHubItem}/>
            </Link>
        )
    })
  return (
    <>
        {femaleHubList}
    </>
  )
}

export default FemaleHubCardList