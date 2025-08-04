export type Article = {
  id: number;
  title: string;
  author: string;
  date: Date;
  viewCount: number;
  content: string;
};

export const articles: Array<Article> = [
  {
    id: 1,
    title: "Svelte 5: The Future of Web Development",
    author: "Rich Harris",
    date: new Date("2025-07-20T10:00:00Z"),
    viewCount: 15203,
    content:
      "Svelte 5 introduces runes, a powerful new way to handle reactivity with less magic and more clarity...",
  },
  {
    id: 2,
    title: "Understanding TypeScript for Svelte",
    author: "Jane Doe",
    date: new Date("2025-07-18T14:30:00Z"),
    viewCount: 8900,
    content:
      "TypeScript brings static typing to your Svelte projects, catching errors early and improving developer experience...",
  },
  {
    id: 3,
    title: "Getting Started with SvelteKit",
    author: "John Smith",
    date: new Date("2025-07-15T09:00:00Z"),
    viewCount: 12543,
    content:
      "SvelteKit is the official framework for building robust Svelte applications with features like routing, server-side rendering, and more.",
  },
  {
    id: 4,
    title: "Advanced State Management in Svelte",
    author: "Emily White",
    date: new Date("2025-07-12T11:20:00Z"),
    viewCount: 7800,
    content:
      "Beyond stores, learn advanced patterns for managing complex state in large-scale Svelte applications.",
  },
  {
    id: 5,
    title: "Creating Beautiful UIs with Svelte and Tailwind CSS",
    author: "Alex Green",
    date: new Date("2025-07-10T16:45:00Z"),
    viewCount: 9980,
    content:
      "Combine the simplicity of Svelte with the utility-first approach of Tailwind CSS to build stunning interfaces faster than ever.",
  },
  {
    id: 6,
    title: "Testing Svelte Components with Vitest",
    author: "Chris Black",
    date: new Date("2025-07-08T13:00:00Z"),
    viewCount: 6400,
    content:
      "Ensure your Svelte components are reliable and bug-free by writing unit and component tests with Vitest.",
  },
  {
    id: 7,
    title: "A Guide to Svelte Animations and Transitions",
    author: "Samantha Blue",
    date: new Date("2025-07-05T18:00:00Z"),
    viewCount: 11200,
    content:
      "Leverage Svelte's built-in transition and animation directives to create fluid and engaging user experiences.",
  },
  {
    id: 8,
    title: "Svelte for Performance: A Deep Dive",
    author: "Tom Brown",
    date: new Date("2025-07-02T10:15:00Z"),
    viewCount: 13500,
    content:
      "Understand why Svelte is so fast and learn optimization techniques to make your applications even more performant.",
  },
  {
    id: 9,
    title: "Integrating Svelte with a REST API",
    author: "Jessica Gray",
    date: new Date("2025-06-28T12:00:00Z"),
    viewCount: 8150,
    content:
      "Learn how to fetch, display, and manage data from a remote REST API in your SvelteKit application.",
  },
  {
    id: 10,
    title: "Deploying Your SvelteKit App to Vercel",
    author: "Michael Purple",
    date: new Date("2025-06-25T15:30:00Z"),
    viewCount: 7200,
    content:
      "A step-by-step guide to deploying your server-rendered SvelteKit application on the Vercel platform.",
  },
  {
    id: 11,
    title: "TypeScript Generics for Reusable Components",
    author: "Eleanor Vance",
    date: new Date("2025-06-22T11:00:00Z"),
    viewCount: 9500,
    content:
      "Master TypeScript generics to build highly reusable and type-safe components in Svelte and other frameworks.",
  },
  {
    id: 12,
    title: "Web Accessibility (a11y) in Svelte",
    author: "Ben Carter",
    date: new Date("2025-06-20T09:30:00Z"),
    viewCount: 6800,
    content:
      "Learn how to build accessible web applications with Svelte, ensuring your sites are usable by everyone.",
  },
  {
    id: 13,
    title: "From CRA to SvelteKit: A Migration Guide",
    author: "Olivia Martinez",
    date: new Date("2025-06-18T16:15:00Z"),
    viewCount: 8800,
    content:
      "A practical guide for migrating a React application built with Create React App to SvelteKit.",
  },
  {
    id: 14,
    title: "Working with Forms in Svelte 5",
    author: "David Lee",
    date: new Date("2025-06-15T14:00:00Z"),
    viewCount: 10500,
    content:
      "Explore the best practices for handling user input, validation, and form submission using Svelte 5's new features.",
  },
  {
    id: 15,
    title: "Optimizing Web Fonts for SvelteKit",
    author: "Sophia Rodriguez",
    date: new Date("2025-06-11T10:45:00Z"),
    viewCount: 5900,
    content:
      "Techniques for loading and displaying web fonts efficiently in a SvelteKit project to improve perceived performance and Core Web Vitals.",
  },
];
