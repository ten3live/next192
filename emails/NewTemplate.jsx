import { Html, Body, Button } from "@react-email/components";

export function Email({ url }) {
  return (
    <Html>
      <Body>
        <h1>Hello 👋</h1>
        <Button href={url}>Click Here</Button>
      </Body>
    </Html>
  );
}
