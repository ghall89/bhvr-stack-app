import { Container } from "@radix-ui/themes";

import TopBar from "../components/top-bar/top-bar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopBar />
      <Container width="900px">{children}</Container>
    </>
  );
}
