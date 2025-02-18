import { builder } from "src/builder";

import { StaticWhisperWhereUnique } from "../../types/inputs/staticWhisper/whereUnique";

builder.mutationField("staticWhisperDeleteBatch", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: [StaticWhisperWhereUnique], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.$transaction(args.where.map((where) => dbRls.staticWhisper.delete({ where })));
      return true;
    },
  }),
);
