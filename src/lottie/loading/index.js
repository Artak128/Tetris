import { useLottie } from "lottie-react";
import loading from "./../../assets/animation/loading.json";

const style = {
  width: 300,
  height: 300,
};

export function Loading({condition}) {
  const options = {
    animationData: loading,
    loop: 1,
    autoplay: true,
  };

  const { View, pause } = useLottie(options, style);

  if(condition) pause();

  return View;
}


