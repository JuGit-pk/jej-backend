module.exports = ({ env }) => ({
  // ...
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        category: {
          field: "slug",
          references: "name",
        },
        "sub-category": {
          field: "slug",
          references: "name",
        },
        subCategory: {
          field: "slug",
          references: "name",
        },
      },
    },
  },
  // ...
  graphql: {
    enabled: true,
    config: {
      defaultLimit: 10,
      maxLimit: 20,
      shadowCRUD: true,
      apolloServer: {
        tracing: true,
      },
    },
  },
});
