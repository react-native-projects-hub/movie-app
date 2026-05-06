import { nowPlayingAction } from "@/core/actions/movies/now-playing.action";
import { Redirect } from "expo-router";

export default function Index() {

  nowPlayingAction();
  return (
    <Redirect href={'/home'} />
  );
}