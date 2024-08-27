"use client"; // Adicione esta linha

import React from "react";
import { Aside } from "@/components/aside";
import { Card } from "@/components/card";
import { Footer } from "@/components/footer";
import { FaGear } from "react-icons/fa6";
import { FiBox } from "react-icons/fi";
import { GrNotes } from "react-icons/gr";
import { IoMdCheckboxOutline } from "react-icons/io";
import { MyChart } from "@/components/chart-colaborator";

export default function Dashboards() {

  const cards = [
    { qty: "10", text: "Ambientes", icon: <FiBox size={40} /> },
    { qty: "78", text: "Equipamentos", icon: <FaGear size={40} /> },
    { qty: "22", text: "O.S. Abertas", icon: <GrNotes size={40} /> },
    {
      qty: "93",
      text: "O.S. Concluídas",
      icon: <IoMdCheckboxOutline size={40} />,
    },
  ];

  return (
    <div className="flex flex-col overflow-y-auto w-full">
      <div className="flex-1 flex">
        <main className="flex-1 flex flex-col">
          <h1 className="text-4xl font-bold uppercase w-full p-6 text-center">
            Dashboards
          </h1>
          <div className="grid grid-cols-4 gap-4 p-4">
            {cards.map((props) => (
              <Card
                key={props.text} 
                qty={props.qty}
                text={props.text}
                icon={props.icon}
              />
            ))}
          </div>
          <div>
            <MyChart></MyChart>
        </div>
        </main>
      </div>
    </div>
  );
}
