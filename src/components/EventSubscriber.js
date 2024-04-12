import React, { useEffect } from "react";

function EventSubscriber() {
  useEffect(() => {
    const handleMouseMove = (event) => {
      console.log("Mouse X:", event.clientX);
      console.log("Mouse Y:", event.clientY);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div>Check console for mouse coordinates</div>;
}

export default EventSubscriber;
