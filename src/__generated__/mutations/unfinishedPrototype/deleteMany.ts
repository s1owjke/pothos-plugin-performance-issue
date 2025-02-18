import { builder } from "src/builder";

import { UnfinishedPrototypeWhere } from "../../types/inputs/unfinishedPrototype/where";

builder.mutationField("unfinishedPrototypeDeleteMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: UnfinishedPrototypeWhere, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.unfinishedPrototype.deleteMany({ where: args.where });
      return count;
    },
  }),
);
