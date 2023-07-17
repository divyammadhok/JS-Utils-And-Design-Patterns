export interface UserShape {
  id: number;
  name: string;
  hasAccess: () => boolean;
}
