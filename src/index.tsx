import React from "react";
import Button from "./components/Button";
import Separator from "./components/Separator";
import Text from "./components/Text";
import { Containter } from "./styles";

const App: React.FC = () => {
  return (
    <Containter>
      <Text>Hello</Text>
      <Separator height={20} />
      <Button textType="bold" title="Assine Agora"></Button>
    </Containter>
  );
};
export default App;
