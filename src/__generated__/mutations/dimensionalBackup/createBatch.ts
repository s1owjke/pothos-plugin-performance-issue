import { builder } from "src/builder";

import { DimensionalBackupCreate } from "../../types/inputs/dimensionalBackup/create";
import { DimensionalBackup } from "../../types/objects/dimensionalBackup";

builder.mutationField("dimensionalBackupCreateBatch", (t) =>
  t.field({
    type: [DimensionalBackup],
    nullable: false,
    args: {
      data: t.arg({ type: [DimensionalBackupCreate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.$transaction(args.data.map((data) => dbRls.dimensionalBackup.create({ data })));
    },
  }),
);
