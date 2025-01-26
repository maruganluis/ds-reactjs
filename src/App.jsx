import "./App.css";
import "./ui-kit/atoms/icon/font-icons.css";
import Subtitle from "./ui-kit/atoms/text/subtitle";
import Icon from "./ui-kit/atoms/icon";
import BodyText from "./ui-kit/atoms/text/body";
import PageTitle from "./ui-kit/atoms/text/page-title";

function App() {
  return (
    <>
    <PageTitle>Hello World</PageTitle>
    
    <Subtitle>Subtítulo por defecto</Subtitle>
    <Subtitle size="xs">Subtítulo pequeño XS</Subtitle>
    <Subtitle size="md">Subtítulo mediano MD</Subtitle>
    <Subtitle size="lg">Subtítulo por defecto</Subtitle>

    <Icon name="checkmark-circle"></Icon>
    <Icon name="search"></Icon>

    <Subtitle size="lg">
      Subtítulo con Icono: <Icon name="checkmark-circle"></Icon>
    </Subtitle>

    <BodyText>Texto de cuerpo por defecto</BodyText>
    <BodyText size="xs">Texto de cuerpo extra pequeño</BodyText>
    <BodyText size="sm">Texto de cuerpo pequeño</BodyText>
    <BodyText size="lg">Texto de cuerpo grande</BodyText>
    <BodyText size="md">Texto de cuerpo por defecto</BodyText>
    </>
  );
}

export default App;