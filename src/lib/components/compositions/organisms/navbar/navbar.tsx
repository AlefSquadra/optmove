export function Navbar(props: { name: string; className?: string }) {
  return <div className={`h-[70px] w-full text-white ${props.className}`}>{props.name}</div>;
}
