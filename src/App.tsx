import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ErrorBoundary from "@/components/ErrorBoundary";
import StructuredData from "@/components/StructuredData";
import EditModeToggle from "@/components/EditModeToggle";
import { EditModeProvider } from "@/contexts/EditModeContext";
import { usePerformance } from "@/hooks/usePerformance";

const queryClient = new QueryClient();

const AppContent = () => {
  usePerformance();

  return (
    <>
      <StructuredData />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <EditModeToggle />
    </>
  );
};

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <EditModeProvider>
          <AppContent />
        </EditModeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
