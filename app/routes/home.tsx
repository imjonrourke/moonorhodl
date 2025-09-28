import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <h1>&#128640; or &#57397; &#58407;</h1>
      <p>Check the size of your &#57647; after &#129413; takes their cut</p>
    </div>
  );
  return <Welcome />;
}
