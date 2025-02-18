import { builder } from "src/builder";

import { EmotionalSupportTableCreate } from "../../types/inputs/emotionalSupportTable/create";
import { EmotionalSupportTable } from "../../types/objects/emotionalSupportTable";

builder.mutationField("emotionalSupportTableCreateBatch", (t) =>
  t.field({
    type: [EmotionalSupportTable],
    nullable: false,
    args: {
      data: t.arg({ type: [EmotionalSupportTableCreate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.$transaction(args.data.map((data) => dbRls.emotionalSupportTable.create({ data })));
    },
  }),
);
