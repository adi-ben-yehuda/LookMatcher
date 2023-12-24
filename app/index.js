import { Redirect } from "expo-router";

export default function Index() {
  return <Redirect style={{ pointerEvents: "auto" }} href="/App" />;
}
