import { builder } from "src/builder";

import { DimensionalBackupUpdateMany } from "../../types/inputs/dimensionalBackup/updateMany";
import { DimensionalBackupWhere } from "../../types/inputs/dimensionalBackup/where";

builder.mutationField("dimensionalBackupUpdateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: DimensionalBackupWhere, required: true }),
      data: t.arg({ type: DimensionalBackupUpdateMany, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.dimensionalBackup.updateMany({
        where: args.where,
        data: args.data,
      });
      return count;
    },
  }),
);
