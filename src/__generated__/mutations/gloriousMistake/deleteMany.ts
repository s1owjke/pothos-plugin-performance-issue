import { builder } from "src/builder";

import { GloriousMistakeWhere } from "../../types/inputs/gloriousMistake/where";

builder.mutationField("gloriousMistakeDeleteMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: GloriousMistakeWhere, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.gloriousMistake.deleteMany({ where: args.where });
      return count;
    },
  }),
);
