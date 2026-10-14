import { Body, Html, Tailwind, type TailwindConfig, Text } from 'react-email';
// Loaded by the plugin in esbuild-plugins.mjs. esbuild has no loader for it.
import greeting from './greeting.custom';

const tailwindConfig: TailwindConfig = {
  theme: { extend: { colors: { brand: '#2250f4' } } },
};

export default function Greeting() {
  return (
    <Html>
      <Tailwind config={tailwindConfig}>
        <Body>
          <Text className="text-brand">{greeting}</Text>
        </Body>
      </Tailwind>
    </Html>
  );
}
