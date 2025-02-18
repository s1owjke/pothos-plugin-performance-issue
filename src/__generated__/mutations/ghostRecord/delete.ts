import { builder } from "src/builder";

import { GhostRecordWhereUnique } from "../../types/inputs/ghostRecord/whereUnique";

builder.mutationField("ghostRecordDelete", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: GhostRecordWhereUnique, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.ghostRecord.delete({ where: args.where });
      return true;
    },
  }),
);
