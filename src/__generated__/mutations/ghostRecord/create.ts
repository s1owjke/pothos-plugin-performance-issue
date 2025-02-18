import { builder } from "src/builder";

import { GhostRecordCreate } from "../../types/inputs/ghostRecord/create";
import { GhostRecord } from "../../types/objects/ghostRecord";

builder.mutationField("ghostRecordCreate", (t) =>
  t.field({
    type: GhostRecord,
    nullable: false,
    args: {
      data: t.arg({ type: GhostRecordCreate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.ghostRecord.create({ data: args.data });
    },
  }),
);
