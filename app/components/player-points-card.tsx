import { cn } from "cn";
import { Plus, User } from "lucide-react";
import type { ComponentProps } from "react";
import { FlowerCombinationsCard } from "~/components/flower-combinations-card";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";

export type PlayerPointsCardProps = ComponentProps<"div"> & {
  name: string;
  points?: number;
};

export function PlayerPointsCard({
  name,
  points,
  ...props
}: PlayerPointsCardProps) {
  return (
    <Dialog>
      <DialogTrigger
        render={<PlayerPointsTrigger name={name} points={points} {...props} />}
      />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Combinaisons</DialogTitle>
        </DialogHeader>
        <FlowerCombinationsCard />
        <div className="flex gap-2">
          <Button className="flex-1" size="lg" variant="secondary">
            Saisir manuellement
          </Button>
          <Button className="flex-1" size="lg" variant="outline">
            Editer de profil
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function PlayerPointsTrigger({
  name,
  points,
  className,
  ...props
}: PlayerPointsCardProps) {
  return (
    <div
      className={cn(
        "flex cursor-pointer flex-col items-center overflow-hidden rounded transition-opacity hover:opacity-95",
        className,
      )}
      {...props}
    >
      <header className="flex w-full items-center justify-between gap-4 bg-white/15 px-3 py-2 text-center font-semibold text-lg">
        <User />
        <span>{name}</span>
        <Plus />
      </header>
      <p className="p-4 text-center">
        <span className="font-semibold text-6xl">{points ?? 0}</span>
        <br />
        <span className="font-bold text-sm">points</span>
      </p>
    </div>
  );
}
