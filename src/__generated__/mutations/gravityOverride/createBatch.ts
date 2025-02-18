import { builder } from "src/builder";

import { GravityOverrideCreate } from "../../types/inputs/gravityOverride/create";
import { GravityOverride } from "../../types/objects/gravityOverride";

builder.mutationField("gravityOverrideCreateBatch", (t) =>
  t.field({
    type: [GravityOverride],
    nullable: false,
    args: {
      data: t.arg({ type: [GravityOverrideCreate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.$transaction(args.data.map((data) => dbRls.gravityOverride.create({ data })));
    },
  }),
);
