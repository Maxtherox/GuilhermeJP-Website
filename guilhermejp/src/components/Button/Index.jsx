import { Container } from "./styles";

export function Button({ title, loading = false, link = '', ...rest }) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Container type="button" disabled={loading} {...rest}>
          {loading ? 'carregando...' : title}
        </Container>
      </a>
    );
  }