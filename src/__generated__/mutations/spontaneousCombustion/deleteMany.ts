import { builder } from "src/builder";

import { SpontaneousCombustionWhere } from "../../types/inputs/spontaneousCombustion/where";

builder.mutationField("spontaneousCombustionDeleteMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: SpontaneousCombustionWhere, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.spontaneousCombustion.deleteMany({ where: args.where });
      return count;
    },
  }),
);
