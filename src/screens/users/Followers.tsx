import { useOutletContext } from "react-router-dom";

interface IFollwersContext {
  nameOfMyUser: string;
}

export default function Followers() {
  const { nameOfMyUser } = useOutletContext<IFollwersContext>();
  return <h1>Here are {nameOfMyUser}의 followers</h1>;
}
