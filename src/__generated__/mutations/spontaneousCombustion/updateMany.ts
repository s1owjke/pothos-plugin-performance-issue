import { builder } from "src/builder";

import { SpontaneousCombustionUpdateMany } from "../../types/inputs/spontaneousCombustion/updateMany";
import { SpontaneousCombustionWhere } from "../../types/inputs/spontaneousCombustion/where";

builder.mutationField("spontaneousCombustionUpdateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: SpontaneousCombustionWhere, required: true }),
      data: t.arg({ type: SpontaneousCombustionUpdateMany, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.spontaneousCombustion.updateMany({
        where: args.where,
        data: args.data,
      });
      return count;
    },
  }),
);
