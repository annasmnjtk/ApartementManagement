import { useSelector } from "react-redux";
import Main from "../layout/Main";
import userSlice from "../Store/auth-slice";

export default function HomePage(props) {
  // const { token } = useSelector((store) => store[userSlice.name]);

  return <Main />;
}
