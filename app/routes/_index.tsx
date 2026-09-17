import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export function meta(/* {}: Route.MetaArgs */) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function IndexPage() {
  const { t } = useTranslation();

  return (
    <div>
      <Link to="/bouquet-royal">Bouquet royal</Link>
    </div>
  );
}
