import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="pb-24 pt-40">
      <Container className="text-center">
        <p className="font-display text-[6rem] leading-none text-pink">404</p>
        <h1 className="text-title-2 mt-4 text-plum">Essa página não deu match</h1>
        <p className="mx-auto mt-4 max-w-md text-body text-plum-soft">O endereço pode ter mudado. Que tal voltar para o começo?</p>
        <Button href="/" size="lg" className="mt-8">Ir para a página inicial</Button>
      </Container>
    </section>
  );
}
