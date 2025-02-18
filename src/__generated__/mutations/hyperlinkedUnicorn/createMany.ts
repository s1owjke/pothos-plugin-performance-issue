import { builder } from "src/builder";

import { HyperlinkedUnicornCreateMany } from "../../types/inputs/hyperlinkedUnicorn/createMany";

builder.mutationField("hyperlinkedUnicornCreateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      data: t.arg({ type: [HyperlinkedUnicornCreateMany], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.hyperlinkedUnicorn.createMany({ data: args.data });
      return count;
    },
  }),
);
