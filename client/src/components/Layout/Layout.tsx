import { Props } from "../../App";
import NavBar from "../NavBar/NavBar";
import "./Layout.scss";

function Layout({ children: ChildComponent }: Props) {
  return (
    <div className="Layout">
      <NavBar />
      {ChildComponent}
    </div>
  );
}

export default Layout;
