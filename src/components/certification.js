import React from 'react';

const Certification = ({ data }) => (
  <section className="mb-5">
    <h1 className="section-header mb-5">Certification</h1>
    {data &&
      data.map(item => (
        <div className="my-2" key={item.certificate}>
          <h2 className="item-header text-lg">{item.certificate}</h2>
          <h3 className="item-sub">{item.institution}</h3>
          <p className="text-sm text-neutral-500 font-light">
            {item.start} - {item.end}
          </p>
        </div>
      ))}
  </section>
);

export default Certification;