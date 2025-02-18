import { builder } from "src/builder";

import { RejectedTheoryCreate } from "../../types/inputs/rejectedTheory/create";
import { RejectedTheory } from "../../types/objects/rejectedTheory";

builder.mutationField("rejectedTheoryCreate", (t) =>
  t.field({
    type: RejectedTheory,
    nullable: false,
    args: {
      data: t.arg({ type: RejectedTheoryCreate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.rejectedTheory.create({ data: args.data });
    },
  }),
);
