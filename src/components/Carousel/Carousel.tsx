import { FC, MouseEventHandler, useCallback, useEffect, useState } from "react";
import "./Carousel.css";

type CarouselProps = {
  data: Record<string, string | number>[];
  onChangeList: MouseEventHandler<HTMLButtonElement>
};

const Carousel: FC<CarouselProps> = ({ data, onChangeList }) => {
  const [pics, setPics] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (data?.length !== 0) {
      setPics(data);
    }
  }, [data]);

  const onNext = useCallback(() => {
    if (index === pics.length - 1) {
      return setIndex(0);
    }
    return setIndex((prev) => prev + 1);
  }, [index, pics]);

  const onBack = useCallback(() => {
    if (index === 0) {
      return setIndex(pics.length - 1);
    }
    return setIndex((prev) => prev - 1);
  }, [index, pics]);

  return (
    <>
      {data?.length && (
        <div className="container">
          <div className="image-wrapper">
            {data.map((pic, i) => {
              return (
                <img
                  style={{display: index === i ? 'block': 'none' }}
                  className="image"
                  src={`${pic?.download_url}`}
                  alt={`${pic?.author}`}
                />
              );
            })}
            <span>
              {index + 1} / {data?.length}
            </span>
          </div>
          <div className="button-group">
            <button className="back" onClick={onBack}>
              Back
            </button>
            
            <button className="next" onClick={onNext}>
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Carousel;
