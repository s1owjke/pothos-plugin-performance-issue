import { builder } from "src/builder";

import { EmotionalSupportTableCreate } from "../../types/inputs/emotionalSupportTable/create";
import { EmotionalSupportTable } from "../../types/objects/emotionalSupportTable";

builder.mutationField("emotionalSupportTableCreate", (t) =>
  t.field({
    type: EmotionalSupportTable,
    nullable: false,
    args: {
      data: t.arg({ type: EmotionalSupportTableCreate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.emotionalSupportTable.create({ data: args.data });
    },
  }),
);
