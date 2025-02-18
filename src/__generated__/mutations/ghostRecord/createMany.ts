import { builder } from "src/builder";

import { GhostRecordCreateMany } from "../../types/inputs/ghostRecord/createMany";

builder.mutationField("ghostRecordCreateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      data: t.arg({ type: [GhostRecordCreateMany], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.ghostRecord.createMany({ data: args.data });
      return count;
    },
  }),
);
