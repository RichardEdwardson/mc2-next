"use client"
export default function Home() {
  return (
    <main className="">
      <div className="max-w-96 mx-auto pt-10">
        <div className="py-2">
          <MC2ChatLogo />
        </div>
        <div className="my-3 px-10">
          <RoomOptions />
        </div>
        <div className="overflow-hidden rounded-md bg-white shadow p-5 divide-y divide-gray-200">
          <div className="my-3">
            <h1 className="text-base font-light text-center text-[#666]"
            >Sign in to get started...</h1>
            <JoinRoomForm />

          </div>

          <div className="pt-5">
          <button className=" w-full bg-[#265B89] text-white text-sm font-light p-2">Login</button>
            

          </div>
          
        </div>

      </div>

    </main>
  );
}


function MC2ChatLogo() {
  return (
    <p className="text-4xl text-[#444] text-center">
      <span className="font-bold">MC²</span>
      <span className="font-extralight">Chat</span>
    </p>
  )
}

import { RadioGroup } from "@headlessui/react";
import { clsx } from "clsx";
import { useState } from "react";

function RoomOptions() {
  const options = ['create room', 'join room']
  const [option, setOption] = useState(options[0])

  return (
    <RadioGroup
      className="flex justify-center text-lg font-semibold  "
      value={option}
      onChange={setOption}
    >
      {options.map((value, index) => (
        <RadioGroup.Option
          key={index}
          value={value}
          className={({ checked, active }) => clsx(
            'cursor-pointer rounded-full p-2 text-center w-1/2 mx-3 uppercase text-sm font-bold transition duration-300',
            {
              'bg-[#b30e00] text-white': checked,
              'text-gray-500': !checked,
            }
          )}
        >
          <span>{value}</span>

        </RadioGroup.Option>
      ))}

    </RadioGroup>
  )
}

import { Formik, Form, Field } from 'formik'
function JoinRoomForm() {
  return (
    <Formik
      initialValues={{
        username: '',
        roomname: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form className="">
        <div className="relative">
          <Field className="border w-full py-[6px] h-[34px] pl-[12px] pr-[35px] my-[5px] font-light text-sm"
            id="username" name="username" placeholder="Username" />
          <GlyphiconUser className="absolute top-0 right-0 h-[14px] my-[15px] mx-[9px]"/>
        </div>
        <Field className="border w-full py-[6px] h-[34px] px-[12px] my-[5px] font-light text-sm"
          id="roomname" name="roomname" placeholder="Room Name" />
      </Form>
    </Formik>
  )
}

//<button type="submit">Submit</button>
function GlyphiconUser({className}) {
  return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 110 109.6086">
      <g>
        <path fill="#777777" d="M55.01,109.54c-16.73,0-33.46-.08-50.18.07-3.49.03-4.41-1.17-4.73-4.57-.59-6.19,1.58-10.02,7.05-13.15,8.89-5.08,17.32-10.95,25.93-16.51,3.16-2.04,4.91-7.37,3.63-10.67-.22-.56-.57-.72-1.03-.94-5.78-2.72-7.77-7.88-7.95-13.65-.25-8.47-.23-16.99.24-25.45C28.73,10.98,40.96.01,54.97,0c14-.01,26.29,10.97,27.04,24.64.47,8.46.49,16.97.24,25.45-.17,5.77-2.21,10.82-7.89,13.73-2.64,1.35-1.37,9.02,1.86,11.15,6.45,4.24,12.98,8.36,19.47,12.53,2.34,1.5,4.54,3.34,7.06,4.45,6.05,2.66,7.77,7.19,7.1,13.45-.32,3.01-1.12,4.23-4.29,4.21-16.85-.11-33.71-.05-50.56-.05Z"/>
      </g>
    </svg>
  )
}