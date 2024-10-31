"use client";
import React, { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { useFrame } from "@studio-freight/hamo";

export const SmoothScrollProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [lenis, setLenis] = useState<Lenis | undefined>(undefined);
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      syncTouch: true,
      // lerp: 0.02,
    });

    lenis.start();
    setLenis(lenis);
    // @ts-ignore
    window.lenis = lenis;

    return () => {
      lenis.destroy();
    };
  }, []);

  useFrame((time: any) => {
    if (lenis == undefined) return;
    lenis.raf(time);
  });

  return <>{children}</>;
};
