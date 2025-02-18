import { builder } from "src/builder";

import { GhostRecordCreate } from "../../types/inputs/ghostRecord/create";
import { GhostRecord } from "../../types/objects/ghostRecord";

builder.mutationField("ghostRecordCreateBatch", (t) =>
  t.field({
    type: [GhostRecord],
    nullable: false,
    args: {
      data: t.arg({ type: [GhostRecordCreate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.$transaction(args.data.map((data) => dbRls.ghostRecord.create({ data })));
    },
  }),
);
