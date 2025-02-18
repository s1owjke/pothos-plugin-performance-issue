import { builder } from "src/builder";

import { EmotionalSupportTableUpdate } from "../../types/inputs/emotionalSupportTable/update";
import { EmotionalSupportTableWhereUnique } from "../../types/inputs/emotionalSupportTable/whereUnique";
import { EmotionalSupportTable } from "../../types/objects/emotionalSupportTable";

builder.mutationField("emotionalSupportTableUpdate", (t) =>
  t.field({
    type: EmotionalSupportTable,
    nullable: false,
    args: {
      where: t.arg({ type: EmotionalSupportTableWhereUnique, required: true }),
      data: t.arg({ type: EmotionalSupportTableUpdate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.emotionalSupportTable.update({
        where: args.where,
        data: args.data,
      });
    },
  }),
);
