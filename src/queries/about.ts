import { graphql, useStaticQuery } from 'gatsby';

export const useAboutQuery = () => {
  const { about } = useStaticQuery(
    graphql`
      query {
        about: strapiSobreMi {
          texto
        }
      }
    `
  );
  return about;
};
