import { builder } from "src/builder";

import { DimensionalBackupUpdate } from "../../types/inputs/dimensionalBackup/update";
import { DimensionalBackupWhereUnique } from "../../types/inputs/dimensionalBackup/whereUnique";
import { DimensionalBackup } from "../../types/objects/dimensionalBackup";

builder.mutationField("dimensionalBackupUpdate", (t) =>
  t.field({
    type: DimensionalBackup,
    nullable: false,
    args: {
      where: t.arg({ type: DimensionalBackupWhereUnique, required: true }),
      data: t.arg({ type: DimensionalBackupUpdate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.dimensionalBackup.update({
        where: args.where,
        data: args.data,
      });
    },
  }),
);
