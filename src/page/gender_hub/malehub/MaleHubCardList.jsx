import React from 'react'
import useFetchData from '../../../hooks/useFetchData'
import MaleHubCard from './MaleHubCard';
import { Link } from 'react-router-dom';

const MaleHubCardList = () => {
    const url = 'http://localhost:7000/malehub';
    const {data: maleHub, loading, error} = useFetchData(url);

    const maleHubList = maleHub?.map((maleHubItem, index) => {
        return (
            <Link key={maleHubItem?.id} to={`${maleHubItem?.id}`}>
                <MaleHubCard maleHubItem={maleHubItem}/>
            </Link>
        )
    })
  return (
    <>
        {maleHubList}
    </>
  )
}

export default MaleHubCardList