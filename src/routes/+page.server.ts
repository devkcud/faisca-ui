import { prisma } from '$lib/server/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  return { articles: await prisma.article.findMany({ take: 6 }) };
};
