import { builder } from "src/builder";

import { GloriousMistakeUpdate } from "../../types/inputs/gloriousMistake/update";
import { GloriousMistakeWhereUnique } from "../../types/inputs/gloriousMistake/whereUnique";
import { GloriousMistake } from "../../types/objects/gloriousMistake";

builder.mutationField("gloriousMistakeUpdateBatch", (t) =>
  t.field({
    type: [GloriousMistake],
    nullable: false,
    args: {
      where: t.arg({ type: [GloriousMistakeWhereUnique], required: true }),
      data: t.arg({ type: [GloriousMistakeUpdate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      if (args.where.length !== args.data.length) {
        throw new Error("The length of the where and data arrays must be the same");
      }

      return dbRls.$transaction(
        args.where.map((where, index) => {
          const data = args.data[index];
          return dbRls.gloriousMistake.update({ where, data });
        }),
      );
    },
  }),
);
