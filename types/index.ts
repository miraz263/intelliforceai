export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface RouteMeta {
  title: string;
  description: string;
  path: string;
}
