import Formulario from "./components/Formulario.js";
import Mascotas from "./components/Mascotas.js";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Formulario />
      <Mascotas />
    </ChakraProvider>
  );
}

export default App;
