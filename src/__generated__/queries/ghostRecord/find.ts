import { builder } from "src/builder";

import { GhostRecordWhereUnique } from "../../types/inputs/ghostRecord/whereUnique";
import { GhostRecord } from "../../types/objects/ghostRecord";

builder.queryField("ghostRecord", (t) =>
  t.prismaField({
    type: GhostRecord,
    nullable: true,
    args: {
      where: t.arg({ type: GhostRecordWhereUnique, required: true }),
    },
    resolve: (query, root, args, { dbRls }) => {
      return dbRls.ghostRecord.findUnique({
        ...query,
        where: args.where,
      });
    },
  }),
);
