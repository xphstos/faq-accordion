import { component$ } from "@builder.io/qwik";
import styles from "../../styles/app.module.css";
import { IconPlus } from "../icon-plus/icon-plus";
import { IconMinus } from "../icon-minus/icon-minus";

type DetailProps = {
  title: string;
  description: string | string[];
};

export const Detail = component$(({ title, description }: DetailProps) => {
  return (
    <details class={styles.detail}>
      <summary class={styles.summary}>
        <h2 class={styles.h2}>
          {title} <IconPlus class={styles.plus} />
          <IconMinus class={styles.minus} />
        </h2>
      </summary>
      {Array.isArray(description) ? (
        description.map((d, i) => <p key={i}>d</p>)
      ) : (
        <p>{description}</p>
      )}
    </details>
  );
});
