import { styled } from "@/styles";

const Button = styled("button", {
  backgroundColor: "$rocketseat",
  padding: 10,
});

export default function Home() {
  return <Button>Enviar</Button>;
}
