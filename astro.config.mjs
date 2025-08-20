// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "My Docs",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "DSA Notes",
          items: [
            { label: "Array Patterns", slug: "dsa/array-patterns" },
            { label: "Two Sum", slug: "dsa/two-sum" },
            {
              label: "Best Time to Buy and Sell Stock",
              slug: "dsa/best-time-to-buy-or-sell-stocks",
            },
          ],
        },
        {
          label: "React",
          items: [
            {
              label: "Hooks",
              items: [
                { label: "", slug: "react/hooks/react-hooks" },

                // {
                //   label: "useCallback",
                //   slug: "react/hooks/use-callback",
                // },
              ],
            },
            {
              label: "Interview Questions",
              items: [
                {
                  label: "Class vs Functional Components ",
                  slug: "react/interviews/class-vs-functional-comp",
                },
                {
                  label: "useState vs useRef vs useReducer",
                  slug: "react/interviews/usestate-useref-usereducer",
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
});
