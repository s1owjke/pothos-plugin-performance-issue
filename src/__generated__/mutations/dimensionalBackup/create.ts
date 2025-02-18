import { builder } from "src/builder";

import { DimensionalBackupCreate } from "../../types/inputs/dimensionalBackup/create";
import { DimensionalBackup } from "../../types/objects/dimensionalBackup";

builder.mutationField("dimensionalBackupCreate", (t) =>
  t.field({
    type: DimensionalBackup,
    nullable: false,
    args: {
      data: t.arg({ type: DimensionalBackupCreate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.dimensionalBackup.create({ data: args.data });
    },
  }),
);
