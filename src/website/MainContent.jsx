import React, { Suspense } from "react";
import ButtonGradient from "../assets/svg/ButtonGradient";
import Header from "../components/Header";
import Hero from "../components/Hero";

const LazyBenefits = React.lazy(() => import("../components/Benefits"));
const LazyCollaboration = React.lazy(() =>
  import("../components/Collaboration")
);
const LazyServices = React.lazy(() => import("../components/Services"));
const LazyPricing = React.lazy(() => import("../components/Pricing"));
const LazyRoadmap = React.lazy(() => import("../components/Roadmap"));
const LazyFooter = React.lazy(() => import("../components/Footer"));

const MainContent = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Suspense fallback={<div>Loading...</div>}>
          <LazyBenefits />
          <LazyCollaboration />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <LazyServices />
          <LazyPricing />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <LazyRoadmap />
          <LazyFooter />
        </Suspense>
      </div>

      <ButtonGradient />
    </>
  );
};

export default MainContent;
