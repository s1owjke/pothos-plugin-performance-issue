import { builder } from "src/builder";

import { ForbiddenCheeseburgerCreateWithoutStaticWhispers } from "./createWithoutStaticWhispers";
import { ForbiddenCheeseburgerWhereUnique } from "./whereUnique";

export const ForbiddenCheeseburgerCreateRelationListWithoutStaticWhispers = builder
  .inputRef<any>("ForbiddenCheeseburgerCreateRelationListWithoutStaticWhispers")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ForbiddenCheeseburgerWhereUnique] }),
      create: t.field({ type: [ForbiddenCheeseburgerCreateWithoutStaticWhispers] }),
    }),
  });
