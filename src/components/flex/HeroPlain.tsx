import { HeroStoryblok } from "@/component-types-sb";
import Container from "../Container";

const HeroPlain = ({ blok }: { blok: HeroStoryblok }) => {
  return (
    <div className="bg-tertiary text-white pt-44 pb-24">
      <Container>
        <h1 className="text-5xl font-bold mb-6">{blok.title}</h1>
        <p className="text-xl text-blue-100 max-w-3xl">{blok.content}</p>
      </Container>
    </div>
  );
};
export default HeroPlain;
