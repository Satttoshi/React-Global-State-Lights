import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({ lights, onAllLights }) {
  const allLightsOn = lights.every((light) => light.isOn === true);
  const allLightsOff = lights.every((light) => light.isOn === false);

  return (
    <StyledQuickActions>
      <Button
        disabled={allLightsOff}
        type="button"
        onClick={() => {
          onAllLights(0);
        }}
      >
        Turn all lights off
      </Button>
      <Button
        disabled={allLightsOn}
        type="button"
        onClick={() => {
          onAllLights(1);
        }}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
