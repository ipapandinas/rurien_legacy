import { graphql, useStaticQuery } from 'gatsby';

export const useWorkQuery = () => {
  const { work } = useStaticQuery(
    graphql`
      query {
        work: allStrapiObras {
          nodes {
            ano
            categoria {
              nombre
            }
            dimension
            obra {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            strapiId
            tecnica
            titulo
          }
        }
      }
    `
  );
  return work.nodes;
};
