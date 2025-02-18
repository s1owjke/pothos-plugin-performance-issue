import { builder } from "src/builder";

import { GloriousMistakeWhereUnique } from "../../types/inputs/gloriousMistake/whereUnique";

builder.mutationField("gloriousMistakeDeleteBatch", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: [GloriousMistakeWhereUnique], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.$transaction(args.where.map((where) => dbRls.gloriousMistake.delete({ where })));
      return true;
    },
  }),
);
