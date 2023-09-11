import { use } from 'react';

async function getContentData(cat: string, id?: string | undefined) {
  const catName = cat ? `/${cat}` : ``;

  const contentId = id ? `/${id}` : ``;
  const result = await fetch(
    `https://suehiro.microcms.io/api/v1${catName}${contentId}`,
    {
      headers: {
        'X-MICROCMS-API-KEY': process.env.NEXT_PUBLIC_API_KEY as string,
      },
    },
  ).then((res) => res.json());
  return result;
}

export function contentData(cat: string, param: string | undefined) {
  const data = use(getContentData(cat, param));
  return data;
}
