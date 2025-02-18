import { builder } from "src/builder";

import { UnnecessaryPermissionUpdate } from "../../types/inputs/unnecessaryPermission/update";
import { UnnecessaryPermissionWhereUnique } from "../../types/inputs/unnecessaryPermission/whereUnique";
import { UnnecessaryPermission } from "../../types/objects/unnecessaryPermission";

builder.mutationField("unnecessaryPermissionUpdate", (t) =>
  t.field({
    type: UnnecessaryPermission,
    nullable: false,
    args: {
      where: t.arg({ type: UnnecessaryPermissionWhereUnique, required: true }),
      data: t.arg({ type: UnnecessaryPermissionUpdate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.unnecessaryPermission.update({
        where: args.where,
        data: args.data,
      });
    },
  }),
);
