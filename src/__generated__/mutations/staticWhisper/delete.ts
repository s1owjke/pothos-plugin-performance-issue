import { builder } from "src/builder";

import { StaticWhisperWhereUnique } from "../../types/inputs/staticWhisper/whereUnique";

builder.mutationField("staticWhisperDelete", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: StaticWhisperWhereUnique, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.staticWhisper.delete({ where: args.where });
      return true;
    },
  }),
);
