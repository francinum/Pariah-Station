import { useBackend } from "../../backend";
import { PreferencesMenuData } from "./data";


export const LoadoutPage = (props, context) => {
  const { act, data } = useBackend<PreferencesMenuData>(context);

};
