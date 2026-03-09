import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import ChiSiamoPage from "./pages/ChiSiamoPage.tsx";
import FestivalPage from "./pages/FestivalPage.tsx";
import CorsiPage from "./pages/CorsiPage.tsx";
import WorkshopPage from "./pages/WorkshopPage.tsx";
import ZandonaiPage from "./pages/ZandonaiPage.tsx";
import BiglietteriaPage from "./pages/BiglietteriaPage.tsx";
import ContattiPage from "./pages/ContattiPage.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/chi-siamo" element={<ChiSiamoPage />} />
          <Route path="/festival" element={<FestivalPage />} />
          <Route path="/corsi" element={<CorsiPage />} />
          <Route path="/workshop" element={<WorkshopPage />} />
          <Route path="/zandonai" element={<ZandonaiPage />} />
          <Route path="/biglietteria" element={<BiglietteriaPage />} />
          <Route path="/contatti" element={<ContattiPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
