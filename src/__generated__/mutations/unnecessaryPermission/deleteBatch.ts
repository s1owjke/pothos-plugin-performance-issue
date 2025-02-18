import { builder } from "src/builder";

import { UnnecessaryPermissionWhereUnique } from "../../types/inputs/unnecessaryPermission/whereUnique";

builder.mutationField("unnecessaryPermissionDeleteBatch", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: [UnnecessaryPermissionWhereUnique], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.$transaction(args.where.map((where) => dbRls.unnecessaryPermission.delete({ where })));
      return true;
    },
  }),
);
