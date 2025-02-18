import { builder } from "src/builder";

import { SchrodingerUserWhere } from "../../types/inputs/schrodingerUser/where";

builder.queryField("schrodingerUserCount", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: SchrodingerUserWhere }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.schrodingerUser.count({ where: args.where || undefined });
    },
  }),
);
