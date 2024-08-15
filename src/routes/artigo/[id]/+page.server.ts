import { error } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async function ({ params }) {
  const id = params.id;

  if (isNaN(Number(id))) {
    error(404, 'Artigo não encontrado');
  }

  const article = await prisma.article.findFirst({
    where: {
      id: {
        equals: Number(id)
      }
    }
  });

  if (article === null) {
    error(404, 'Artigo não encontrado');
  }

  return {
    article
  };
};

export const actions: Actions = {
  sendEmail: async function ({ request }) {
    const { message } = Object.fromEntries(await request.formData()) as { message: string };

    console.log(message);
    // Do something
  }
};
