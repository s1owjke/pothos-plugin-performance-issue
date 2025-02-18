import { SymphonyChartWhere } from "src/__generated__/types/inputs/symphonyChart/where";
import { SymphonyChartWhereUnique } from "src/__generated__/types/inputs/symphonyChart/whereUnique";

import { buildSchema } from "./schema";

(async () => {
  try {
    const startTime = Date.now();

    const exampleTransformer = (value: unknown) => value;

    const refs = [SymphonyChartWhere, SymphonyChartWhereUnique];
    for (const ref of refs) {
      (ref as any).transform(exampleTransformer);
    }

    buildSchema();

    console.log(`Schema build time: ${((Date.now() - startTime) / 1000).toFixed(3)} sec`);

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
