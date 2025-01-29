import "./App.css";
import "./ui-kit/atoms/icon/font-icons.css";
import Subtitle from "./ui-kit/atoms/text/subtitle";
import Icon from "./ui-kit/atoms/icon";
import BodyText from "./ui-kit/atoms/text/body";
import PageTitle from "./ui-kit/atoms/text/page-title";
import Button from "./ui-kit/atoms/button";

function App() {
  return (
    <>
    <BodyText size="lg">Top Seller <Icon name="checkmark-circle"></Icon></BodyText>
    <PageTitle>This is a demo</PageTitle>
    <br />
    <BodyText>Lorem ipsum dolor sit amet. Et numquam nulla et maxime voluptatem et enim sequi aut doloribus itaque aut repellendus provident et ratione distinctio sed autem dicta.</BodyText>
    <br />
    <Button color="primary">Demo</Button>
    </>
  );
}

export default App;