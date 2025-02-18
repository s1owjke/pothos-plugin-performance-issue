import { builder } from "src/builder";

import { OverwrittenLegacyUpdate } from "../../types/inputs/overwrittenLegacy/update";
import { OverwrittenLegacyWhereUnique } from "../../types/inputs/overwrittenLegacy/whereUnique";
import { OverwrittenLegacy } from "../../types/objects/overwrittenLegacy";

builder.mutationField("overwrittenLegacyUpdateBatch", (t) =>
  t.field({
    type: [OverwrittenLegacy],
    nullable: false,
    args: {
      where: t.arg({ type: [OverwrittenLegacyWhereUnique], required: true }),
      data: t.arg({ type: [OverwrittenLegacyUpdate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      if (args.where.length !== args.data.length) {
        throw new Error("The length of the where and data arrays must be the same");
      }

      return dbRls.$transaction(
        args.where.map((where, index) => {
          const data = args.data[index];
          return dbRls.overwrittenLegacy.update({ where, data });
        }),
      );
    },
  }),
);
