import { useState } from "react";

import "@/App.css";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "next-themes";

import { SiteLayout } from "@/components/SiteLayout";
import { Toaster } from "@/components/ui/sonner";
import { siteContent } from "@/data/siteContent";
import {
  AboutPage,
  ContactPage,
  FounderPage,
  HomePage,
  ProductsPage,
  TeamPage,
} from "@/pages/SitePages";

function App() {
  const [language, setLanguage] = useState("en");
  const copy = siteContent.copy[language];

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <BrowserRouter>
        <Routes>
          <Route element={<SiteLayout copy={copy} language={language} setLanguage={setLanguage} />}>
            <Route path="/" element={<HomePage copy={copy} language={language} />} />
            <Route path="/about" element={<AboutPage copy={copy} />} />
            <Route path="/founder" element={<FounderPage copy={copy} language={language} />} />
            <Route path="/team" element={<TeamPage copy={copy} />} />
            <Route path="/products" element={<ProductsPage copy={copy} />} />
            <Route path="/impact" element={<Navigate replace to="/about" />} />
            <Route path="/contact" element={<ContactPage copy={copy} language={language} />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <div className="toaster-wrapper">
        <Toaster position="top-right" />
      </div>
    </ThemeProvider>
  );
}

export default App;