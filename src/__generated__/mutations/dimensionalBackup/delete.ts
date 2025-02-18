import { builder } from "src/builder";

import { DimensionalBackupWhereUnique } from "../../types/inputs/dimensionalBackup/whereUnique";

builder.mutationField("dimensionalBackupDelete", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: DimensionalBackupWhereUnique, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.dimensionalBackup.delete({ where: args.where });
      return true;
    },
  }),
);
