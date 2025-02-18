import { builder } from "src/builder";

import { AlternativeFactWhereUnique } from "../../types/inputs/alternativeFact/whereUnique";

builder.mutationField("alternativeFactDelete", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: AlternativeFactWhereUnique, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.alternativeFact.delete({ where: args.where });
      return true;
    },
  }),
);
