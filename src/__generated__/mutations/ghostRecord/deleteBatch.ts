import { builder } from "src/builder";

import { GhostRecordWhereUnique } from "../../types/inputs/ghostRecord/whereUnique";

builder.mutationField("ghostRecordDeleteBatch", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: [GhostRecordWhereUnique], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.$transaction(args.where.map((where) => dbRls.ghostRecord.delete({ where })));
      return true;
    },
  }),
);
