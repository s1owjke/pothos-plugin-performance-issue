import { builder } from "src/builder";

import { UnnecessaryPermissionCreate } from "../../types/inputs/unnecessaryPermission/create";
import { UnnecessaryPermission } from "../../types/objects/unnecessaryPermission";

builder.mutationField("unnecessaryPermissionCreateBatch", (t) =>
  t.field({
    type: [UnnecessaryPermission],
    nullable: false,
    args: {
      data: t.arg({ type: [UnnecessaryPermissionCreate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.$transaction(args.data.map((data) => dbRls.unnecessaryPermission.create({ data })));
    },
  }),
);
