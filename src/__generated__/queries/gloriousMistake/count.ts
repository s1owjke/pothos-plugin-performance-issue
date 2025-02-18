import { builder } from "src/builder";

import { GloriousMistakeWhere } from "../../types/inputs/gloriousMistake/where";

builder.queryField("gloriousMistakeCount", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: GloriousMistakeWhere }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.gloriousMistake.count({ where: args.where || undefined });
    },
  }),
);
