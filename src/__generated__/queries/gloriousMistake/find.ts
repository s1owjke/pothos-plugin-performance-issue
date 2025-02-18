import { builder } from "src/builder";

import { GloriousMistakeWhereUnique } from "../../types/inputs/gloriousMistake/whereUnique";
import { GloriousMistake } from "../../types/objects/gloriousMistake";

builder.queryField("gloriousMistake", (t) =>
  t.prismaField({
    type: GloriousMistake,
    nullable: true,
    args: {
      where: t.arg({ type: GloriousMistakeWhereUnique, required: true }),
    },
    resolve: (query, root, args, { dbRls }) => {
      return dbRls.gloriousMistake.findUnique({
        ...query,
        where: args.where,
      });
    },
  }),
);
