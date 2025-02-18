import { builder } from "src/builder";

import { UnnecessaryPermissionWhereUnique } from "../../types/inputs/unnecessaryPermission/whereUnique";

builder.mutationField("unnecessaryPermissionDelete", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: UnnecessaryPermissionWhereUnique, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.unnecessaryPermission.delete({ where: args.where });
      return true;
    },
  }),
);
