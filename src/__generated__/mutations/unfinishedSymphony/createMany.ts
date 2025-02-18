import { builder } from "src/builder";

import { UnfinishedSymphonyCreateMany } from "../../types/inputs/unfinishedSymphony/createMany";

builder.mutationField("unfinishedSymphonyCreateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      data: t.arg({ type: [UnfinishedSymphonyCreateMany], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.unfinishedSymphony.createMany({ data: args.data });
      return count;
    },
  }),
);
