import Meta from "components/meta";
import container from "components/container";
import Hero from "components/hero";
import Container from "@/components/container";

export default function Blog() {
  return (
    <Container>
      <Meta pageTitle="ブログ" />
      <Hero title="Blog" subtitle="Recent Posts" />
    </Container>
  );
}
