import React from 'react';
import MaleHubCardList from './MaleHubCardList';

const MaleHub = () => {
  return (
    <section className="max-w-[1280px] mx-auto my-0 px-4">
      <h1 className="text-3xl font-semibold mt-12 text-center">Male Hub</h1>
      <section className="mt-10">
        <MaleHubCardList />
      </section>
    </section>
  );
};

export default MaleHub;
