import { useState, useEffect } from "react";

const useMobileSize = (mobileThreshold = 768) => {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= mobileThreshold
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= mobileThreshold);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [mobileThreshold]);

  return isMobile;
};

export default useMobileSize;
