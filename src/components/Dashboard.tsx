import React from 'react';
import {ReactSVG} from 'react-svg';

export const Dashboard = () => {
  return (
    <section id="dashboard" className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Dashboard
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {/* Here you can map over your dashboard items and render them */}
      </div>
      <ReactSVG
  afterInjection={(svg) => {
    console.log(svg)
  }}
  beforeInjection={(svg) => {
    svg.classList.add('svg-class-name')
    svg.setAttribute('style', 'width: 200px')
  }}
  className="wrapper-class-name"
  desc="Description"
  evalScripts="always"
  fallback={() => <span>Error!</span>}
  httpRequestWithCredentials={true}
  loading={() => <span>Loading</span>}
  onClick={() => {
    console.log('wrapper onClick')
  }}
  onError={(error) => {
    console.error(error)
  }}
  renumerateIRIElements={false}
  src="../assets/alarm-button.svg"
  title="Title"
  useRequestCache={false}
  wrapper="span"
/>

    </section>
  );
};