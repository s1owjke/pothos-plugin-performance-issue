import { builder } from "src/builder";

import { StaticWhisperUpdate } from "../../types/inputs/staticWhisper/update";
import { StaticWhisperWhereUnique } from "../../types/inputs/staticWhisper/whereUnique";
import { StaticWhisper } from "../../types/objects/staticWhisper";

builder.mutationField("staticWhisperUpdate", (t) =>
  t.field({
    type: StaticWhisper,
    nullable: false,
    args: {
      where: t.arg({ type: StaticWhisperWhereUnique, required: true }),
      data: t.arg({ type: StaticWhisperUpdate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.staticWhisper.update({
        where: args.where,
        data: args.data,
      });
    },
  }),
);
