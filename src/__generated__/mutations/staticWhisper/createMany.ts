import { builder } from "src/builder";

import { StaticWhisperCreateMany } from "../../types/inputs/staticWhisper/createMany";

builder.mutationField("staticWhisperCreateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      data: t.arg({ type: [StaticWhisperCreateMany], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.staticWhisper.createMany({ data: args.data });
      return count;
    },
  }),
);
