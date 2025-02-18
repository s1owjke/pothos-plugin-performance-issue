import { builder } from "src/builder";

import { DimensionalBackupWhereUnique } from "../../types/inputs/dimensionalBackup/whereUnique";

builder.mutationField("dimensionalBackupDeleteBatch", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: [DimensionalBackupWhereUnique], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.$transaction(args.where.map((where) => dbRls.dimensionalBackup.delete({ where })));
      return true;
    },
  }),
);
