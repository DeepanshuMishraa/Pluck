"use client";

import Image from "next/image";
import React from "react";
import Deepanshu from './Deepanshu.jpg'
import Link from "next/link"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-black dark:border-white/[0.2] border-gray-300 w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white underline"
        >
          Deepanshu Mishra
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-white text-sm max-w-sm mt-2 "
        >
          Founder | Lead Developer
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={Deepanshu}
            height="1000"
            width="1000"
            className="h-[30rem] w-full  rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-lg underline border-2 border-gray-500 dark:text-white "
          >
            <Link href="https://www.linkedin.com/in/deepanshu-mishra-500a2a155/" className="text-xl">Linkedin →</Link>
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-lg font-bold border-2 border-gray-500"
          >
                        <Link href="https://twitter.com/DeepanshuDipxsy" className="underline">X →</Link>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
