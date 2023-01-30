import { Props } from "../../App";
import AsyncProgramNavBar from "../../components/AsyncProgramNavBar/AsyncProgramNavBar";

const AsyncProgram = ({ children: ChildComponent }: Props) => {
  return (
    <div>
      <AsyncProgramNavBar />
      {ChildComponent}
    </div>
  );
};

export default AsyncProgram;
