/**
 * All backend API endpoint paths in one place.
 * Only paths — no base URL logic here.
 */
export const API = {
  auth: {
    login: '/auth/login',
  },
  blog: {
    published:  '/blog/published',
    bySlug:     (slug: string) => `/blog/slug/${slug}`,
    list:       '/blog',
    stats:      '/blog/stats',
    create:     '/blog',
    single:     (id: number) => `/blog/${id}`,
    update:     (id: number) => `/blog/${id}`,
    delete:     (id: number) => `/blog/${id}`,
  },
  keyword: {
    list:   '/keyword',
    create: '/keyword',
    delete: (id: number) => `/keyword/${id}`,
  },
  upload: {
    image: '/upload/image',
  },
} as const;
