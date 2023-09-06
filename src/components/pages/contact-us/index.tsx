'use client';

import React, { useState } from 'react';
import Navbar from '@/components/common/nav';
import Input from '@/components/common/ui/input';
import Button from '@/components/common/ui/button';
import TextArea from '@/components/common/ui/textArea';
import Select from '@/components/common/ui/select';
const Item = () => {
  const [isActiveContact, setActiveContact] = useState(true);
  const handleCreatorClick = () => {
    setActiveContact(true);
  };
  const handleBrandClick = () => {
    setActiveContact(false);
  };

  const dataOptions = [
    { name: 'abc', value: 'eqwieqeqe' },
    { name: 'ccc', value: 'eqwieqeqe' },
  ];
  return (
    <>
      <Navbar type={true} />
      <div className="lg:px-80 px-5 py-[60px] lg:py-20">
        <div className="text-black lg:text-title_56_64_700 text-title_32_44_700 text-center md:mb-11 mb-7">
          CONTACT US
        </div>
        <div className="flex rounded-61px border border-border cursor-pointer md:mb-11 mb-7">
          <div
            className={`w-6/12 m-1 py-3 text-center md:text-text_sm text-text_13_16_600 ${
              isActiveContact === true
                ? 'text-white bg-primary rounded-61px'
                : 'text-black'
            }`}
            onClick={handleCreatorClick}
            onKeyDown={undefined}
          >{`I'm a creator`}</div>
          <div
            onClick={handleBrandClick}
            onKeyDown={undefined}
            className={`w-6/12 m-1 py-3 text-center md:text-text_sm text-text_13_16_600 ${
              isActiveContact === false
                ? 'text-white bg-primary rounded-61px'
                : 'text-black'
            }`}
          >{`Brand/Partner`}</div>
        </div>

        <form action="">
          <div className="">
            <Input
              label="Your name"
              parentClass="sm:col-span-3 mb-8 md:mb-9"
              name="name"
              placeholder=""
              value=""
              req=""
            />
            <Input
              label="Email address"
              parentClass="sm:col-span-3 mb-8 md:mb-9"
              name="name"
              placeholder=""
              value=""
              req=""
            />
            <Input
              label="Phone number"
              parentClass="sm:col-span-3 mb-8 md:mb-9"
              name="name"
              placeholder=""
              value=""
              req=""
            />

            <Input
              label="Your brand/ business/ shop name"
              parentClass="sm:col-span-3 mb-8 md:mb-9"
              name="name"
              placeholder=""
              value=""
              req=""
            />
            <Input
              label="Your brand/ business/ shop name"
              parentClass="sm:col-span-3 mb-8 md:mb-9"
              name="name"
              placeholder=""
              value=""
              req=""
            />
            <Select
              name="Business type"
              label="Business type"
              req=""
              data={dataOptions}
              parentClass="sm:col-span-3 mb-8 md:mb-9"
            />

            <Select
              name="Industry"
              label="Industry"
              req=""
              data={dataOptions}
              parentClass="sm:col-span-3 mb-8 md:mb-9"
            />
            <TextArea
              name=""
              req=""
              cols={0}
              rows={5}
              label="Message"
              parentClass="w-full"
              placeholder=""
            />
          </div>

          <div className="mt-6 w-full">
            <Button type="submit" text="Submit" classname="w-full p-4" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Item;
