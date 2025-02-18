import { builder } from "src/builder";

import { StaticWhisperWhereUnique } from "../../types/inputs/staticWhisper/whereUnique";
import { StaticWhisper } from "../../types/objects/staticWhisper";

builder.queryField("staticWhisper", (t) =>
  t.prismaField({
    type: StaticWhisper,
    nullable: true,
    args: {
      where: t.arg({ type: StaticWhisperWhereUnique, required: true }),
    },
    resolve: (query, root, args, { dbRls }) => {
      return dbRls.staticWhisper.findUnique({
        ...query,
        where: args.where,
      });
    },
  }),
);
