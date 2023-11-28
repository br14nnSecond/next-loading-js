import { Suspense } from "react";
import DashboardMain from "./DashboardMain";
import Loading from "../loading";

export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-8 p-24">
      <h1 className="text-5xl">Dashboard</h1>
      <Suspense fallback={<Loading />}>
        <DashboardMain />
      </Suspense>
    </main>
  );
}
