import React, { useEffect, useRef } from 'react';
import { IoMoon, IoSunny } from 'react-icons/io5';
import { SquareBtn } from './ Button';

const ToggleTheme = () => {
  const lightRef = useRef<any>();
  const darkRef = useRef<any>();

  useEffect(() => {
    // Change the icons inside the button based on previous settings
    if (
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      lightRef.current.classList.remove('hidden');
    } else {
      darkRef.current.classList.remove('hidden');
    }
  }, []);

  const onToggle = () => {
    // toggle icons inside button
    lightRef.current.classList.toggle('hidden');
    darkRef.current.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'light') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      }

      // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      }
    }
  };

  return (
    <SquareBtn click={onToggle}>
      <span
        ref={darkRef}
        id="theme-toggle-dark-icon"
        className="hidden w-5 h-5"
      >
        <IoMoon />
      </span>
      <span
        ref={lightRef}
        id="theme-toggle-light-icon"
        className="hidden w-5 h-5"
      >
        <IoSunny />
      </span>
    </SquareBtn>
  );
};

export default ToggleTheme;
