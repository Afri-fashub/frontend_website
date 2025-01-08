import React from 'react'
import useFetchData from '../../hooks/useFetchData'
import { useLocation } from 'react-router-dom'
import MaleHub from './malehub/MaleHub';
import FemaleHub from './femalehub/FemaleHub';

const GenderHub = ({text}) => {
  const genderHubLocation = useLocation();

  // if (genderHubLocation.pathname === '/male') null

  return (
    <section>
      {genderHubLocation.pathname === '/male' ? <MaleHub /> : <FemaleHub />}
      {/* <MaleHub /> */}
    </section>
  )
}

export default GenderHub