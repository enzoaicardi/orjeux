import { cn } from "cn";
import { Rose } from "lucide-react";
import type { ComponentProps } from "react";

export type FlowerCombinationsCardProps = ComponentProps<"div">;

export function FlowerCombinationsCard({
  className,
  ...props
}: FlowerCombinationsCardProps) {
  return (
    <div className={cn("flex w-full flex-col gap-4", className)} {...props}>
      <FlowerCombinationCard
        values={[12, 12]}
        name="Paires"
        description="Deux fleurs de même valeur"
        bonus={0}
      />
      <FlowerCombinationCard
        values={[0, 0, 0]}
        name="Couleur"
        description="Trois fleurs de même couleur"
        bonus={10}
      />
      <FlowerCombinationCard
        values={[3, 4, 5]}
        name="Suite"
        description="Trois fleurs dont les valeurs se suivent"
        bonus={20}
      />
      <FlowerCombinationCard
        values={[6, 7, 8]}
        name="Suite colorée"
        description="Trois fleurs de même couleur dont les valeurs se suivent"
        bonus={30}
      />
      <FlowerCombinationCard
        values={[9, 9, 9]}
        name="Bouquet"
        description="Trois fleurs de même valeur"
        bonus={40}
      />
      <FlowerCombinationCard
        values={[15, 15, 15, 15]}
        name="Bouquet royal"
        description="Quatre fleurs de même valeur"
        bonus={60}
      />
    </div>
  );
}

export type FlowerCombinationCardProps = ComponentProps<"button"> & {
  values: number[];
  name: string;
  description: string;
  bonus?: number;
};

export function FlowerCombinationCard({
  values,
  name,
  description,
  bonus,
  className,
  ...props
}: FlowerCombinationCardProps) {
  const colors = [
    "text-sky-500",
    "text-pink-500",
    "text-emerald-500",
    "text-yellow-500",
  ];
  const bgColors = [
    "bg-sky-500",
    "bg-pink-500",
    "bg-emerald-500",
    "bg-yellow-500",
  ];
  const equalsNotEmpty = values.every((value) => value && value === values[0]);
  const selectedIndex = equalsNotEmpty ? 0 : Math.floor(values.length / 2);

  return (
    <button
      type="button"
      className={cn(
        "flex w-full items-center gap-4 rounded-lg px-4 py-2 text-left hover:bg-foreground/10",
        className,
      )}
      {...props}
    >
      <div
        className="flex"
        style={{
          padding: `0 ${values.length * 4}px`,
          translate: `0 -${values.length}px`,
        }}
      >
        {values.map((value, index) => (
          <FlowerCard
            value={value}
            selected={index === selectedIndex}
            className={cn(
              colors[value ? index : 0],
              index === selectedIndex
                ? `${bgColors[value ? index : 0]} text-slate-800`
                : "bg-slate-800",
              "-ml-3",
            )}
            style={{
              rotate: `${index * 10 - (values.length - 1) * 5}deg`,
              translate: `0 ${Math.abs(index * 4 - (values.length - 1) * 2)}px`,
              transformOrigin: "bottom center",
            }}
          />
        ))}
      </div>
      <p className="font-semibold">
        <span className="text-sm">{name}</span>
        <br />
        <span className="text-gray-500 text-xs">{description}</span>
      </p>
      {bonus != null && <p className="ml-auto font-bold">+{bonus}</p>}
    </button>
  );
}

export type FlowerCardProps = ComponentProps<"div"> & {
  value?: number;
  selected?: boolean;
};

export function FlowerCard({ value, className, ...props }: FlowerCardProps) {
  return (
    <div
      className={cn(
        "flex h-13 w-9 flex-col items-center justify-center gap-0.5 rounded-sm border border-border bg-foreground/10 py-1",
        className,
      )}
      {...props}
    >
      <Rose size={16} />
      <span className="font-bold text-xs">{value || ""}</span>
    </div>
  );
}
