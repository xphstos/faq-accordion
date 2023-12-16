import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Detail } from "~/components/detail/detail";
import styles from "../styles/app.module.css";
import { IconStar } from "~/components/icon-star/icon-star";

export default component$(() => {
  return (
    <article class={styles.article}>
      <header class={styles.header}>
        <h1 class={styles.h1}>
          <IconStar class={styles.h1Icon} /> FAQs
        </h1>
      </header>
      <Detail
        title="What is Frontend Mentor, and how will it help me?"
        description="Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
      />
      <Detail
        title="Is Frontend Mentor free?"
        description="Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
      />
      <Detail
        title="Can I use Frontend Mentor projects in my portfolio?"
        description="Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
      />
      <Detail
        title="How can I get help if I'm stuck on a Frontend Mentor challenge?"
        description="The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
      />
    </article>
  );
});

export const head: DocumentHead = {
  title: "Frontend Mentor | FAQ accordion",
  meta: [
    {
      name: "description",
      content: "FAQ accordion",
    },
  ],
  links: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/assets/images/favicon-32x32.png",
    },
  ],
};
