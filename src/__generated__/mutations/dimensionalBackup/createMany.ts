import { builder } from "src/builder";

import { DimensionalBackupCreateMany } from "../../types/inputs/dimensionalBackup/createMany";

builder.mutationField("dimensionalBackupCreateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      data: t.arg({ type: [DimensionalBackupCreateMany], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.dimensionalBackup.createMany({ data: args.data });
      return count;
    },
  }),
);
