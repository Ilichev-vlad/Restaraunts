import { useTheme } from "../theme-context/component";

export const ToggleThemeButton = ({width}) => {
  const { toggleTheme } = useTheme();

  return <button style={{width: width}} onClick={toggleTheme}>toggleTheme</button>;
};