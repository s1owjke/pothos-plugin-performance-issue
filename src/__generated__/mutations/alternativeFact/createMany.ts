import { builder } from "src/builder";

import { AlternativeFactCreateMany } from "../../types/inputs/alternativeFact/createMany";

builder.mutationField("alternativeFactCreateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      data: t.arg({ type: [AlternativeFactCreateMany], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.alternativeFact.createMany({ data: args.data });
      return count;
    },
  }),
);
