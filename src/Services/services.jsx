const BASE_URL = 'https://pixabay.com/api/';

export function createSearchParams(query, page) {
  const searchParams = new URLSearchParams({
    key: '28371758-065fc86b54820776754ee6bc7',
    image_type: 'photo',
    q: '',
    orientation: 'horizontal',
    per_page: 12,
    page: 1,
  });

  searchParams.set('q', query);
  searchParams.set('page', page);

  return `${BASE_URL}?${searchParams.toString()}`;
}
