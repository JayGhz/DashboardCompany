import { CardSummary } from "./components/CardSummary";
import { BookOpenCheck, List, UserRound, Waypoints } from "lucide-react";
import { LastCustomers } from "./components/LastCustomers";
import { SalesDistributor } from "./components/SalesDistributor";
import { TotalSuscribers } from "./components/TotalSuscribers";
import { ListIntegrations } from "./components/ListIntegrations";

export const dataCardsSummary = [
  {
    icon: UserRound,
    total: "12.450",
    average: 15,
    tittle: "Companies registered",
    tooltipText: "See all companies registered",
  },
  {
    icon: Waypoints,
    total: "86.5%",
    average: 80,
    tittle: "Total Revenue",
    tooltipText: "See all of the summary",
  },
  {
    icon: BookOpenCheck,
    total: "363,95 €",
    average: 30,
    tittle: "Bounce Rate",
    tooltipText: "See all of the bounce rate",
  },
];

export default function Home() {
  return (
    <div>
      <h2 className="text-2xl mb-4 font-semibold">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-x-20">
        {dataCardsSummary.map(({ icon, total, average, tittle, tooltipText }) => (
          <CardSummary
            key={tittle}
            icon={icon}
            total={total}
            average={average}
            tittle={tittle}
            tooltipText={tooltipText}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 mt-12 xl:grid-cols-2 md:gap-x-10">
        <LastCustomers />
        <SalesDistributor />
      </div>
      <div className="flex-col md:gap-x-10 xl:flex xl:flex-row gap-y-4 md:gap-y-0 mt-12 md:mb-10 justify-center">
          <TotalSuscribers />
          <ListIntegrations />
      </div>
    </div>
  );
}
