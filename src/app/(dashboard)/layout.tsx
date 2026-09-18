import { AppSidebar } from "@/components/layout/app-sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TooltipProvider>
      <AppSidebar>{children}</AppSidebar>
    </TooltipProvider>
  );
}
