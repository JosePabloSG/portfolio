import { siteConfig } from '@/config/site';
import { getAllPosts } from '@/lib/mdx';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = [''].map((route) => ({
        url: `${siteConfig.url}${route}`,
        lastModified: new Date(),
    }));

    const posts = getAllPosts().map((post) => ({
        url: `${siteConfig.url}/posts/${post.slug}`,
        lastModified: post.metadata.date,
    }));

    return [...routes, ...posts];
}
