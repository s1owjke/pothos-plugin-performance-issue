import { builder } from "src/builder";

import { StaticWhisperWhere } from "../../types/inputs/staticWhisper/where";

builder.queryField("staticWhisperCount", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: StaticWhisperWhere }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.staticWhisper.count({ where: args.where || undefined });
    },
  }),
);
