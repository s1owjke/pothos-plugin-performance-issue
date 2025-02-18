import { builder } from "src/builder";

import { UnnecessaryPermissionUpdate } from "../../types/inputs/unnecessaryPermission/update";
import { UnnecessaryPermissionWhereUnique } from "../../types/inputs/unnecessaryPermission/whereUnique";
import { UnnecessaryPermission } from "../../types/objects/unnecessaryPermission";

builder.mutationField("unnecessaryPermissionUpdateBatch", (t) =>
  t.field({
    type: [UnnecessaryPermission],
    nullable: false,
    args: {
      where: t.arg({ type: [UnnecessaryPermissionWhereUnique], required: true }),
      data: t.arg({ type: [UnnecessaryPermissionUpdate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      if (args.where.length !== args.data.length) {
        throw new Error("The length of the where and data arrays must be the same");
      }

      return dbRls.$transaction(
        args.where.map((where, index) => {
          const data = args.data[index];
          return dbRls.unnecessaryPermission.update({ where, data });
        }),
      );
    },
  }),
);
