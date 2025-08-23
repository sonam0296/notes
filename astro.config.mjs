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
        // {
        //   label: "Guides",
        //   items: [
        //     // Each item here is one entry in the navigation menu.
        //     { label: "Example Guide", slug: "guides/example" },
        //   ],
        // },
        {
          label: "DSA Notes",
          items: [
            { label: "Array Patterns", slug: "dsa/array-patterns" },
            { label: "Two Sum", slug: "dsa/two-sum" },
            {
              label: "Best Time to Buy and Sell Stock",
              slug: "dsa/best-time-to-buy-or-sell-stocks",
            },
            { label: "Move Zeros", slug: "dsa/move-zeros" },
          ],
        },
        {
          label: "JavaScript/TypeScript",
          items: [
            {
              label: "Interview Questions",
              items: [
                {
                  label: "var vs let vs const + Hoisting",
                  slug: "js/interviews/var-let-const",
                },
                {
                  label: "TypeScript Basics",
                  slug: "js/interviews/typescript",
                },
                // {
                //   label: "Event Loop",
                //   slug: "js/interviews/event-loop",
                // },
                {
                  label: "Prototypes & this Binding",
                  slug: "js/interviews/prototyes-and-this",
                },
                {
                  label: "Closures & Lexical Scope",
                  slug: "js/interviews/closure-lexical-scope",
                },
                // {
                //   label: "Prototypes & Inheritance",
                //   slug: "js/interviews/prototypes-inheritance",
                // },
                // {
                //   label: "Debounce & Throttle",
                //   slug: "js/interviews/debounce-throttle",
                // },
                // {
                //   label: "Call, Apply & Bind",
                //   slug: "js/interviews/call-apply-bind",
                // },
              ],
            },
          ],
        },
        {
          label: "React",
          items: [
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
                {
                  label: "useEffect with Cleanup",
                  slug: "react/interviews/use-effect",
                },
                {
                  label: "useMemo & useCallback",
                  slug: "react/interviews/usememo-usecallback",
                },
              ],
            },
          ],
        },
        {
          label: "NodeJS",
          items: [
            {
              label: "Interview Questions",
              items: [
                {
                  label: "Event Loop",
                  slug: "node/interviews/event-loop",
                },
                // {
                //   label: "useState vs useRef vs useReducer",
                //   slug: "react/interviews/usestate-useref-usereducer",
                // },
                // {
                //   label: "useEffect with Cleanup",
                //   slug: "react/interviews/use-effect",
                // },
              ],
            },
          ],
        },
      ],
    }),
  ],
});
