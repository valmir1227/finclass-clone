import React from "react";
import BackButton from "./components/BackButton";
import Button from "./components/Button";
import Dots from "./components/Dots";
import Input from "./components/Input";
import Separator from "./components/Separator";
import Text from "./components/Text";
import { Containter } from "./styles";

const App: React.FC = () => {
  return (
    <Containter>
      <Separator height={40} />
      <BackButton />
      <Text>Hello</Text>
      <Separator height={40} />
      <Button textType="bold" title="Assine Agora"></Button>
      <Separator height={40} />
      <Input name="Email" error="N tem email" />
      <Separator height={40} />

      <Input secureTextEntry name="Senha" error="Senha inválida" />
      <Dots amount={10}></Dots>
    </Containter>
  );
};
export default App;
