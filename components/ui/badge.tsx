interface BadgeProps {
  color: string;
  title: string;
}

export function Badge({ color, title }: BadgeProps): JSX.Element {
  return (
    <span
      className={`mr-2 inline-flex w-max items-center 
      rounded px-2 py-0.5 text-xs font-medium capitalize
      ${color === 'blue' ? 'bg-blue-100' : 'bg-green-100'} 
      ${color === 'blue' ? 'text-blue-800' : 'text-green-800'}`}>
      {title}
    </span>
  );
}
