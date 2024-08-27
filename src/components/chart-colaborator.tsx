"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartData = [
  { month: "January", Gabriel: 186, Rui: 80 , Geovanna: 40},
  { month: "February", Gabriel: 305, Rui: 200, Geovanna: 100 },
  { month: "March", Gabriel: 237, Rui: 120,  Geovanna: 237},
  { month: "April", Gabriel: 73, Rui: 190, Geovanna: 237 },
  { month: "May", Gabriel: 209, Rui: 130, Geovanna: 120 },
  { month: "June", Gabriel: 214, Rui: 140, Geovanna: 54 },
]

const chartConfig = {
  Gabriel: {
    label: "Gabriel",
    color: "#2563eb",
  },
  Rui: {
    label: "Rui",
    color: "#60a5fa",
  },
  Geovanna: {
    label: "Geovanna",
    color: "#00A510",
  },
} satisfies ChartConfig

export function MyChart() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-[500px]">
      <BarChart accessibilityLayer data={chartData}>
      <CartesianGrid vertical={false} />
      <XAxis
      dataKey="month"
      tickLine={false}
      tickMargin={10}
      axisLine={false}
      tickFormatter={(value) => value.slice(0, 3)}
    />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="Gabriel" fill="var(--color-Gabriel)" radius={4} />
        <Bar dataKey="Rui" fill="var(--color-Rui)" radius={4} />
        <Bar dataKey="Geovanna" fill="var(--color-Geovanna  )" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}
