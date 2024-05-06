import { useQuery } from "@tanstack/react-query";
import Carousel from "../components/Carousel/Carousel";
import { useCallback } from "react";
import { throttle } from "lodash";

export const MainPage = () => {
  const { data } = useQuery({
    queryKey: ["pics"],
    queryFn: () =>
      fetch(`https://picsum.photos/v2/list?limit=10&page=${0}`).then((res) =>
        res.json(),
      ),
  });

  const onChangeList = useCallback(() => {
    throttle(() => {}, 2000);
  }, []);

  return (
    <div className="main">
      <Carousel data={data} onChangeList={onChangeList} />
    </div>
  );
};
