'use client'

import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    let animationFrameId: number;

    const updateCursor = (e: MouseEvent) => {
      animationFrameId = requestAnimationFrame(() => {
        if (dotRef.current && circleRef.current) {
          dotRef.current.style.left = `${e.clientX}px`;
          dotRef.current.style.top = `${e.clientY}px`;

          circleRef.current.style.left = `${e.clientX}px`;
          circleRef.current.style.top = `${e.clientY}px`;

          const target = e.target as HTMLElement;
          const pointer = window.getComputedStyle(target).getPropertyValue('cursor') === 'pointer';
          setIsPointer(pointer);

          const cursorSize = pointer ? 30 : 20;
          circleRef.current.style.width = `${cursorSize}px`;
          circleRef.current.style.height = `${cursorSize}px`;
          circleRef.current.className = `custom-cursor-circle${pointer ? ' pointer' : ''}`;
        }
      });
    };

    window.addEventListener('mousemove', updateCursor);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // 初始渲染只 render DOM 節點
  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot" />
      <div ref={circleRef} className="custom-cursor-circle" />
    </>
  );
};

export default CustomCursor;