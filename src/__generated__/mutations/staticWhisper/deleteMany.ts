import { builder } from "src/builder";

import { StaticWhisperWhere } from "../../types/inputs/staticWhisper/where";

builder.mutationField("staticWhisperDeleteMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: StaticWhisperWhere, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.staticWhisper.deleteMany({ where: args.where });
      return count;
    },
  }),
);
