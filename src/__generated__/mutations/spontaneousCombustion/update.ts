import { builder } from "src/builder";

import { SpontaneousCombustionUpdate } from "../../types/inputs/spontaneousCombustion/update";
import { SpontaneousCombustionWhereUnique } from "../../types/inputs/spontaneousCombustion/whereUnique";
import { SpontaneousCombustion } from "../../types/objects/spontaneousCombustion";

builder.mutationField("spontaneousCombustionUpdate", (t) =>
  t.field({
    type: SpontaneousCombustion,
    nullable: false,
    args: {
      where: t.arg({ type: SpontaneousCombustionWhereUnique, required: true }),
      data: t.arg({ type: SpontaneousCombustionUpdate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.spontaneousCombustion.update({
        where: args.where,
        data: args.data,
      });
    },
  }),
);
