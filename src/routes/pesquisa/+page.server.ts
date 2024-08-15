import { prisma } from '$lib/server/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async function ({ url }) {
  const query = url.searchParams.get('q');

  if (query === null || query.trim() === '') {
    return {
      result: 'Nada encontrado, pesquisa vazia.'
    };
  }

  const articles = await prisma.article.findMany({
    where: {
      OR: [
        { title: { contains: query, mode: 'insensitive' } },
        { summary: { contains: query, mode: 'insensitive' } },
        { body: { contains: query, mode: 'insensitive' } }
      ]
    },
    orderBy: {
      registered_at: 'desc'
    }
  });

  return {
    result: articles.length > 0 ? articles : `Nada encontrado com o termo: "${query}"`
  };
};
