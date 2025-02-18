import { builder } from "src/builder";

import { StaticWhisperUpdateMany } from "../../types/inputs/staticWhisper/updateMany";
import { StaticWhisperWhere } from "../../types/inputs/staticWhisper/where";

builder.mutationField("staticWhisperUpdateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: StaticWhisperWhere, required: true }),
      data: t.arg({ type: StaticWhisperUpdateMany, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.staticWhisper.updateMany({
        where: args.where,
        data: args.data,
      });
      return count;
    },
  }),
);
