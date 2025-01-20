import { MouseParallax } from "react-just-parallax";

const ParallaxTest = () => {
  return (
    <div style={{ height: "100vh" }}>
      <MouseParallax strength={0.2}>
        <div className="w-20 h-20 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full" />
      </MouseParallax>
    </div>
  );
};

export default ParallaxTest;
