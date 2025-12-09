import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Programs from "./pages/Programs";
import ProgramAccelerate from "./pages/ProgramAccelerate";
import ProgramElevate from "./pages/ProgramElevate";
import ProgramExecutive from "./pages/ProgramExecutive";
import ProgramCompare from "./pages/ProgramCompare";
import SuccessStories from "./pages/SuccessStories";
import Contact from "./pages/Contact";
import Newsletter from "./pages/Newsletter";
import Blog from "./pages/Blog";
import CareerAssessment from "./pages/CareerAssessment";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/accelerate" element={<ProgramAccelerate />} />
          <Route path="/programs/elevate" element={<ProgramElevate />} />
          <Route path="/programs/executive" element={<ProgramExecutive />} />
          <Route path="/programs/compare" element={<ProgramCompare />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/career-assessment" element={<CareerAssessment />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
