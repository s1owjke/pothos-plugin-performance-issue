import { builder } from "src/builder";

import { UnfinishedPrototypeCreateMany } from "../../types/inputs/unfinishedPrototype/createMany";

builder.mutationField("unfinishedPrototypeCreateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      data: t.arg({ type: [UnfinishedPrototypeCreateMany], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.unfinishedPrototype.createMany({ data: args.data });
      return count;
    },
  }),
);
