import { builder } from "src/builder";

import { GloriousMistakeCreate } from "../../types/inputs/gloriousMistake/create";
import { GloriousMistake } from "../../types/objects/gloriousMistake";

builder.mutationField("gloriousMistakeCreate", (t) =>
  t.field({
    type: GloriousMistake,
    nullable: false,
    args: {
      data: t.arg({ type: GloriousMistakeCreate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.gloriousMistake.create({ data: args.data });
    },
  }),
);
