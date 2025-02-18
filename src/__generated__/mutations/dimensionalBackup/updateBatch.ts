import { builder } from "src/builder";

import { DimensionalBackupUpdate } from "../../types/inputs/dimensionalBackup/update";
import { DimensionalBackupWhereUnique } from "../../types/inputs/dimensionalBackup/whereUnique";
import { DimensionalBackup } from "../../types/objects/dimensionalBackup";

builder.mutationField("dimensionalBackupUpdateBatch", (t) =>
  t.field({
    type: [DimensionalBackup],
    nullable: false,
    args: {
      where: t.arg({ type: [DimensionalBackupWhereUnique], required: true }),
      data: t.arg({ type: [DimensionalBackupUpdate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      if (args.where.length !== args.data.length) {
        throw new Error("The length of the where and data arrays must be the same");
      }

      return dbRls.$transaction(
        args.where.map((where, index) => {
          const data = args.data[index];
          return dbRls.dimensionalBackup.update({ where, data });
        }),
      );
    },
  }),
);
