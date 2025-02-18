import { builder } from "src/builder";

import { AlternativeFactWhere } from "../../types/inputs/alternativeFact/where";

builder.mutationField("alternativeFactDeleteMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: AlternativeFactWhere, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.alternativeFact.deleteMany({ where: args.where });
      return count;
    },
  }),
);
