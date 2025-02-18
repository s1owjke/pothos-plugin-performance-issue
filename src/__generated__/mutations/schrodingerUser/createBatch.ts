import { builder } from "src/builder";

import { SchrodingerUserCreate } from "../../types/inputs/schrodingerUser/create";
import { SchrodingerUser } from "../../types/objects/schrodingerUser";

builder.mutationField("schrodingerUserCreateBatch", (t) =>
  t.field({
    type: [SchrodingerUser],
    nullable: false,
    args: {
      data: t.arg({ type: [SchrodingerUserCreate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.$transaction(args.data.map((data) => dbRls.schrodingerUser.create({ data })));
    },
  }),
);
