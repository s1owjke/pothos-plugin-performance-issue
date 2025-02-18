import { builder } from "src/builder";

import { ForbiddenCheeseburgerCreateWithoutStaticWhispers } from "./createWithoutStaticWhispers";
import { ForbiddenCheeseburgerWhereUnique } from "./whereUnique";

export const ForbiddenCheeseburgerCreateRelationWithoutStaticWhispers = builder
  .inputRef<any>("ForbiddenCheeseburgerCreateRelationWithoutStaticWhispers")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ForbiddenCheeseburgerWhereUnique }),
      create: t.field({ type: ForbiddenCheeseburgerCreateWithoutStaticWhispers }),
    }),
  });
