import { builder } from "src/builder";

import { DimensionalBackupWhereUnique } from "../../types/inputs/dimensionalBackup/whereUnique";
import { DimensionalBackup } from "../../types/objects/dimensionalBackup";

builder.queryField("dimensionalBackup", (t) =>
  t.prismaField({
    type: DimensionalBackup,
    nullable: true,
    args: {
      where: t.arg({ type: DimensionalBackupWhereUnique, required: true }),
    },
    resolve: (query, root, args, { dbRls }) => {
      return dbRls.dimensionalBackup.findUnique({
        ...query,
        where: args.where,
      });
    },
  }),
);
