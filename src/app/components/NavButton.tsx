export const NavButton = (props: NavButtonProps) => {
  return <button>{props.text}</button>;
};

interface NavButtonProps {
  text: string;
}
