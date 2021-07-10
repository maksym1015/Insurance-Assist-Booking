import BaseLayout from "../Layout/Base";
import Container from "../Layout/Container";
import HeroSection from "./HeroSection";
import Booking from "./Booking";
import Confirmation from "./Confirmation";
import { timeSlots } from "../fakeData";

import { useSelector } from "../context/store";

function App() {
  const confirmStatus = useSelector((state) => state.confirmStatus);
  return (
    <BaseLayout>
      <HeroSection />
      <Container>
        {confirmStatus ? <Confirmation /> : <Booking timeSlots={timeSlots} />}
      </Container>
    </BaseLayout>
  );
}

export default App;
