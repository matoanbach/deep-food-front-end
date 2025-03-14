"use client";

import { Card, CardContent } from '@/components/ui/card';
import React from 'react';
import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';


function generateRandom() {
    return Math.floor(Math.random() * 300)
}

const chartData = [
    { month: "January", desktop: generateRandom(), mobile: generateRandom() },
    { month: "February", desktop: generateRandom(), mobile: generateRandom() },
    { month: "March", desktop: generateRandom(), mobile: generateRandom() },
    { month: "April", desktop: generateRandom(), mobile: generateRandom() },
    { month: "May", desktop: generateRandom(), mobile: generateRandom() },
    { month: "June", desktop: generateRandom(), mobile: generateRandom() },
]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "#2563eb",
    },
    mobile: {
        label: "Mobile",
        color: "#60a5fa",
    },
} satisfies ChartConfig

const Chart1: React.FC = () => {

    return (
        <Card className="rounded-lg border-none">
            <CardContent className="">
                {/* <div className="flex justify-center items-center min-h-[calc(100vh-56px-64px-20px-24px-56px-48px)]">
                    <div className="flex flex-col relative"> */}
                        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
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
                                <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                                <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                            </BarChart>
                        </ChartContainer>
                    {/* </div>
                </div> */}
            </CardContent>
        </Card>
    )
};
export default Chart1;