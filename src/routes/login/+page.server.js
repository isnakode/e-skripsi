import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
  default: async () => {
    return redirect(302, '/20ti058/dashboard')
  }
};