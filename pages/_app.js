import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialLights = [
  { name: "Living Room", isOn: false, id: 0 },
  { name: "Kitchen", isOn: false, id: 1 },
  { name: "Bedroom", isOn: false, id: 2 },
  { name: "Bathroom", isOn: false, id: 3 },
  { name: "Garage", isOn: false, id: 4 },
  { name: "Porch", isOn: false, id: 5 },
  { name: "Garden", isOn: false, id: 6 },
  { name: "Office", isOn: false, id: 7 },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLights);

  const lightsOnSum = lights.filter((light) => light.isOn === true).length;

  const isDimmed = lights.every((light) => light.isOn === false);

  function handleToggle(id) {
    setLights(
      lights.map((light) => {
        return light.id === id ? { ...light, isOn: !light.isOn } : light;
      })
    );
  }

  function handleAllLights(bool) {
    if (bool) {
      setLights(
        lights.map((light) => {
          return { ...light, isOn: true };
        })
      );
    } else {
      setLights(
        lights.map((light) => {
          return { ...light, isOn: false };
        })
      );
    }
  }

  return (
    <Layout isDimmed={isDimmed}>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        onToggle={handleToggle}
        onAllLights={handleAllLights}
        lightsOnSum={lightsOnSum}
      />
    </Layout>
  );
}
