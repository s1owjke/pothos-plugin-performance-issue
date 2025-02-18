import { builder } from "src/builder";

import { GloriousMistakeWhereUnique } from "../../types/inputs/gloriousMistake/whereUnique";

builder.mutationField("gloriousMistakeDelete", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: GloriousMistakeWhereUnique, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.gloriousMistake.delete({ where: args.where });
      return true;
    },
  }),
);
