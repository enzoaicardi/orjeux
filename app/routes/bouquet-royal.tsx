import { PlayerPointsModal } from "~/components/player-points-card";

export default function BouquetRoyalPage() {
  return (
    <div className="grid grid-cols-2 gap-4 self-center p-4">
      <PlayerPointsModal name="Laurence" points={12} className="bg-red-500" />
      <PlayerPointsModal
        name="Maxime"
        points={145}
        className="bg-emerald-500"
      />
      <PlayerPointsModal name="Elodie" points={120} className="bg-blue-500" />
      <PlayerPointsModal name="Julie" points={96} className="bg-pink-500" />
    </div>
  );
}
