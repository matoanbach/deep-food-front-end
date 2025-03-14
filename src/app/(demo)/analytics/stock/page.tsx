import Link from "next/link";

import PlaceholderContent from "@/components/demo/placeholder-content";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import Chart1 from "@/components/charts/chart1/chart1";
import { Chart2 } from "@/components/charts/chart2/chart2";

export default function PostsPage() {
  return (
    <ContentLayout title="Stock">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/dashboard">Dashboard</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Stock</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="grid auto-rows-min gap-2 md:grid-cols-2">
          <div className="aspect-video rounded-xl bg-muted/50" >
            <Chart1 />
          </div>
          <div className="aspect-video rounded-xl bg-muted/50" >
            <Chart1 />
          </div>
        </div>
        <div className="grid auto-rows-min gap-4 md:grid-cols-2">
          <div className=" rounded-xl bg-muted/50 md:col-span-2" >
          <Chart2/>
          </div>
        </div>
      </div>
      {/* <PlaceholderContent /> */}
    </ContentLayout>
  );
}
