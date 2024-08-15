import type { Actions } from "./$types";

export const actions: Actions = {
  default: async function ({request}) {
    const data = Object.fromEntries(await request.formData());

    console.log(data);
  }
};
