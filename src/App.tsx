/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { MarqueeStrip } from "./components/MarqueeStrip";
import { HesperMoment } from "./components/HesperMoment";
import { FindUs } from "./components/FindUs";
import { LoadingScreen } from "./components/LoadingScreen";
import { LoginGate } from "./components/LoginGate";

// Pages
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Story } from "./pages/Story";

export default function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <Router>
      <div className="bg-void min-h-screen text-cream overflow-x-hidden selection:bg-crimson selection:text-cream">
        {!loadingComplete && <LoadingScreen onComplete={() => setLoadingComplete(true)} />}
        
        {loadingComplete && (
          <>
            <LoginGate />
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/story" element={<Story />} />
            </Routes>
            <MarqueeStrip />
            <HesperMoment />
            <FindUs />
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

