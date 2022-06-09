import { useState, useEffect } from "react";
import { getStories } from "./getdata";

const DatafromApi = (type) => {
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getStories(type)
      .then((story) => {
        setStories(story);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [type]);
  return { isLoading, stories };
};

export default DatafromApi;
