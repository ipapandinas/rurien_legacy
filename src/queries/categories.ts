import { graphql, useStaticQuery } from 'gatsby';

export const useCategoriesQuery = () => {
  const { categories } = useStaticQuery(
    graphql`
      query {
        categories: allStrapiCategorias {
          nodes {
            nombre
            strapiId
          }
        }
      }
    `
  );
  return categories.nodes;
};
