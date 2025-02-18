import { builder } from "src/builder";

import { DimensionalBackupWhere } from "../../types/inputs/dimensionalBackup/where";

builder.queryField("dimensionalBackupCount", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: DimensionalBackupWhere }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.dimensionalBackup.count({ where: args.where || undefined });
    },
  }),
);
