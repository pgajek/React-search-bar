import { useEffect, useState } from "react";

export const useDebounce = <T>(value: T, delay:number = 500) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setDebouncedValue(debouncedValue);
    }, delay);
    console.log('debouncing')
    return () => clearTimeout(timeout)
  }, [value, delay])

  return debouncedValue;
};
