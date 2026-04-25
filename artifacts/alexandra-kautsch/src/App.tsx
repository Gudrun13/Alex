import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Feldlesen from "@/pages/Feldlesen";
import Angebote from "@/pages/Angebote";
import FuerWen from "@/pages/FuerWen";
import UeberMich from "@/pages/UeberMich";
import Kontakt from "@/pages/Kontakt";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/feldlesen" component={Feldlesen} />
      <Route path="/angebote" component={Angebote} />
      <Route path="/fuerwen" component={FuerWen} />
      <Route path="/uebermich" component={UeberMich} />
      <Route path="/kontakt" component={Kontakt} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
