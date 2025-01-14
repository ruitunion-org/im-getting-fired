type TailwindClassGroups = {
  layout?: string;
  display?: string;
  spacing?: string;
  sizing?: string;
  flexbox?: string;
  grid?: string;
  typography?: string;
  colors?: string;
  effects?: string;
  transitions?: string;
  cursor?: string;
  width?: string;
  group?: string;
  padding?: string;
  background?: string;
  border?: string;
  transition?: string;
  transform?: string;
  height?: string;
  overflow?: string;
  position?: string;
};

export const tw = (groups: Partial<TailwindClassGroups>): string => {
  return Object.values(groups).filter(Boolean).join(" ");
};
