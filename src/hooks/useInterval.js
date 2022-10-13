import { useEffect, useRef } from "react";


/**
 * UseInterval is a custom hook that allows you to run a function at a set interval.
 * @param callback - The function to be executed every delay milliseconds.
 * @param delay - The time in milliseconds between each call to the callback.
 */
export function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);

      return () => {
        clearInterval(id);
      };
    }
  }, [delay]);
}
