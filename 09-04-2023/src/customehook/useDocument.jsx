import { useEffect } from "react";

const useDocument = (count) => {
  useEffect(() => {
    document.title = `Count is ${count}`;
  }, [count]);
};

export default useDocument;
