import { builder } from "src/builder";

import { DimensionalBackupWhere } from "../../types/inputs/dimensionalBackup/where";

builder.mutationField("dimensionalBackupDeleteMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: DimensionalBackupWhere, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.dimensionalBackup.deleteMany({ where: args.where });
      return count;
    },
  }),
);
