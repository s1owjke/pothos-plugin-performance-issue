import { builder } from "src/builder";

import { StaticWhisperUpdate } from "../../types/inputs/staticWhisper/update";
import { StaticWhisperWhereUnique } from "../../types/inputs/staticWhisper/whereUnique";
import { StaticWhisper } from "../../types/objects/staticWhisper";

builder.mutationField("staticWhisperUpdateBatch", (t) =>
  t.field({
    type: [StaticWhisper],
    nullable: false,
    args: {
      where: t.arg({ type: [StaticWhisperWhereUnique], required: true }),
      data: t.arg({ type: [StaticWhisperUpdate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      if (args.where.length !== args.data.length) {
        throw new Error("The length of the where and data arrays must be the same");
      }

      return dbRls.$transaction(
        args.where.map((where, index) => {
          const data = args.data[index];
          return dbRls.staticWhisper.update({ where, data });
        }),
      );
    },
  }),
);
