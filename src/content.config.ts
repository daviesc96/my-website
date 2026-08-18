// ────────────────────────────────────────────────────────────────────────────
//  Max MSP Devices collection.
//
//  Devices folder: src/content/devices/*.mdx
//  URL: /devices/<slug>
//
//  Each device post combines blog text + intro images + gallery + optional video.
//  The filename (without ".mdx") becomes the URL slug.
//  Set `draft: true` to hide from production build.
// ────────────────────────────────────────────────────────────────────────────
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const deviceSchema = ({ image }: { image: () => any }) =>
  z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    // Lead/hero image shown above intro text
    cover: image().optional(),
    coverAlt: z.string().default(''),
    // Array of images shown in the intro (before main text)
    introImages: z.array(z.string()).default([]),
    // Array of images shown in gallery at bottom
    gallery: z.array(z.string()).default([]),
    // Optional YouTube embed URL (e.g., "https://www.youtube.com/embed/VIDEO_ID")
    youtubeEmbed: z.string().optional(),
  });

const devices = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/devices' }),
  schema: deviceSchema,
});

export const collections = { devices };
