import { builder } from "src/builder";

import { GloriousMistakeUpdateMany } from "../../types/inputs/gloriousMistake/updateMany";
import { GloriousMistakeWhere } from "../../types/inputs/gloriousMistake/where";

builder.mutationField("gloriousMistakeUpdateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: GloriousMistakeWhere, required: true }),
      data: t.arg({ type: GloriousMistakeUpdateMany, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.gloriousMistake.updateMany({
        where: args.where,
        data: args.data,
      });
      return count;
    },
  }),
);
