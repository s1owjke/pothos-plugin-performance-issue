import { builder } from "src/builder";

import { StaticWhisperCreateWithoutForbiddenCheeseburger } from "./createWithoutForbiddenCheeseburger";
import { StaticWhisperWhereUnique } from "./whereUnique";

export const StaticWhisperCreateRelationWithoutForbiddenCheeseburger = builder
  .inputRef<any>("StaticWhisperCreateRelationWithoutForbiddenCheeseburger")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: StaticWhisperWhereUnique }),
      create: t.field({ type: StaticWhisperCreateWithoutForbiddenCheeseburger }),
    }),
  });
