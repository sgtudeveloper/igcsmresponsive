import React from 'react'
import Image from 'next/image'


const About = () => {
  return (
    <div className="p-4 md:p-12 lg:p-12 bg-gray-100 text-gray-800 flex flex-col lg:flex-row">
      <div className="flex-1">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 pl-4 md:pl-8 lg:pl-12 text-orange-500 underline">
          About
        </h1>
        <p className="text-sm md:text-base lg:text-lg leading-relaxed text-justify pl-4 md:pl-8 lg:pl-12">
          Indira Gandhi Computer Shaksharta Mission (IGCSM) is a not-for-profit
          organization dedicated to empowering underprivileged communities
          across India through education, skill development, and microfinance
          initiatives. Established in 2008 and headquartered in Delhi, IGCSM
          operates in over <b>21 states</b>, impacting more than{" "}
          <b> 500,000 people</b>, including children, youth, and women. With a
          network of <b>500+ Training Partners (TPs)</b> and ISO 9001:2015
          certification, IGCSM is committed to delivering high-quality,
          market-relevant education and skills training. In partnership with the
          government,{" "}
          <u>
            <i>
              {" "}
              IGCSM manages ITIs and Polytechnics in UP, with plans to expand
              across 18 more institutions nationwide
            </i>
          </u>
          . Additionally, IGCSM sponsors Sikkim Global Technical University
          (SGTU), offering affordable higher education options, including
          UGC-approved PGDCA and DCA courses.
        </p>
      </div>
      <div className="flex-1 lg:ml-8 mt-4 lg:mt-0">
        <Image
          src="/image/hero_banner.jpg"
          width={400}
          height={400}
          alt="About IGCSM"
          className="mx-auto"
        />
      </div>
    </div>
  );
}

export default About