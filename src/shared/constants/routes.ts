export enum RoutesEnum {
  Margarita = "margarita",
  Mojito = "mojito",
  A1 = "a1",
  Kir = "kir",
}
export const routesSet: Set<string> = new Set(Object.values(RoutesEnum));

export const routesByName: Record<RoutesEnum, string> = {
  [RoutesEnum.Margarita]: "Margarita",
  [RoutesEnum.Mojito]: "Mojito",
  [RoutesEnum.A1]: "A1",
  [RoutesEnum.Kir]: "Kir",
};
