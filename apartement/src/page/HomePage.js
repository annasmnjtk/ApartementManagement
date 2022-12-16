import { useSelector } from "react-redux";
import userSlice from "../Store/auth-slice";

export default function HomePage(props) {
  const { token } = useSelector((store) => store[userSlice.name]);

  return <>ini halaman home{token}</>;
}
