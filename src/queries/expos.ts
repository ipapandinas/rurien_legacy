import { graphql, useStaticQuery } from 'gatsby';

export const useExposQuery = () => {
  const { expos } = useStaticQuery(
    graphql`
      query {
        expos: strapiExpos {
          collectivas
          individuales
          principales {
            detalle
            fecha
            id
            titulo
            ubicacion
            cartel {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `
  );
  return expos;
};
