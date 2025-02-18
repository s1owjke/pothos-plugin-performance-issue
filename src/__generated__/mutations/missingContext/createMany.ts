import { builder } from "src/builder";

import { MissingContextCreateMany } from "../../types/inputs/missingContext/createMany";

builder.mutationField("missingContextCreateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      data: t.arg({ type: [MissingContextCreateMany], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.missingContext.createMany({ data: args.data });
      return count;
    },
  }),
);
