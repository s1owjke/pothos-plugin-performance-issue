import { builder } from "src/builder";

import { SpontaneousCombustionUpdate } from "../../types/inputs/spontaneousCombustion/update";
import { SpontaneousCombustionWhereUnique } from "../../types/inputs/spontaneousCombustion/whereUnique";
import { SpontaneousCombustion } from "../../types/objects/spontaneousCombustion";

builder.mutationField("spontaneousCombustionUpdateBatch", (t) =>
  t.field({
    type: [SpontaneousCombustion],
    nullable: false,
    args: {
      where: t.arg({ type: [SpontaneousCombustionWhereUnique], required: true }),
      data: t.arg({ type: [SpontaneousCombustionUpdate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      if (args.where.length !== args.data.length) {
        throw new Error("The length of the where and data arrays must be the same");
      }

      return dbRls.$transaction(
        args.where.map((where, index) => {
          const data = args.data[index];
          return dbRls.spontaneousCombustion.update({ where, data });
        }),
      );
    },
  }),
);
