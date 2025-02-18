import { builder } from "src/builder";

import { GloriousMistakeUpdate } from "../../types/inputs/gloriousMistake/update";
import { GloriousMistakeWhereUnique } from "../../types/inputs/gloriousMistake/whereUnique";
import { GloriousMistake } from "../../types/objects/gloriousMistake";

builder.mutationField("gloriousMistakeUpdate", (t) =>
  t.field({
    type: GloriousMistake,
    nullable: false,
    args: {
      where: t.arg({ type: GloriousMistakeWhereUnique, required: true }),
      data: t.arg({ type: GloriousMistakeUpdate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.gloriousMistake.update({
        where: args.where,
        data: args.data,
      });
    },
  }),
);
