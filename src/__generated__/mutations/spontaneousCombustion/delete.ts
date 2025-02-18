import { builder } from "src/builder";

import { SpontaneousCombustionWhereUnique } from "../../types/inputs/spontaneousCombustion/whereUnique";

builder.mutationField("spontaneousCombustionDelete", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: SpontaneousCombustionWhereUnique, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.spontaneousCombustion.delete({ where: args.where });
      return true;
    },
  }),
);
