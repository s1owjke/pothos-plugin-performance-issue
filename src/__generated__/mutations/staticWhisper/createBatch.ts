import { builder } from "src/builder";

import { StaticWhisperCreate } from "../../types/inputs/staticWhisper/create";
import { StaticWhisper } from "../../types/objects/staticWhisper";

builder.mutationField("staticWhisperCreateBatch", (t) =>
  t.field({
    type: [StaticWhisper],
    nullable: false,
    args: {
      data: t.arg({ type: [StaticWhisperCreate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.$transaction(args.data.map((data) => dbRls.staticWhisper.create({ data })));
    },
  }),
);
