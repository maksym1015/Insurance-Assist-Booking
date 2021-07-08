import { useState } from "react";
import BaseLayout from "../Layout/Base";
import Container from "../Layout/Container";
import HeroSection from "./HeroSection";
import Booking from "./Booking";
import Confirmation from "./Confirmation";
import { timeSlots } from "../fakeData";

function App() {
  const [confimed, setConfirm] = useState(false);
  const handleConfirm = () => {
    setConfirm(true);
  };
  return (
    <BaseLayout>
      <HeroSection />
      <Container>
        {confimed ? (
          <Confirmation />
        ) : (
          <Booking
            initialDate={new Date()}
            timeSlots={timeSlots}
            confirmClick={handleConfirm}
          />
        )}
      </Container>
    </BaseLayout>
  );
}

export default App;
