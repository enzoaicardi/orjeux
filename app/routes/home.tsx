import { useTranslation } from "react-i18next";

export function meta(/* {}: Route.MetaArgs */) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <p>{t("title")}</p>
    </div>
  );
}
