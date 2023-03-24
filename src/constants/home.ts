import dayjs from "dayjs";
import { SingleNoteProps } from "@/components/Notes/NoteList/SingleNote/SingleNote";
import { NotePreviewProps } from "@/components/Notes/NotePreview/NotePreview";

export const dummyNotes: NotePreviewProps[] = [
  {
    word: "misunderstand",
    translation: "źle zrozumieć",
    explanation: "To understand something wrong.",
    example: "There has been a misunderstanding between us, but it's cool now.",
  },
  {
    word: "wealth",
    translation: "bogactwo",
    explanation: "Situation, when somebody has a lot of money.",
    example: "The wealth of Elon Musk is almost impossible to be spent.",
  },
];

type DummyNote = Omit<SingleNoteProps, "id">;

export const dummySingleNotes: DummyNote[] = [
  {
    word: "svelte",
    created_at: dayjs().format(),
  },
  {
    word: "react",
    created_at: dayjs().format(),
  },
  {
    word: "solid",
    created_at: dayjs().format(),
  },
  {
    word: "next",
    created_at: dayjs().format(),
  },
  {
    word: "express",
    created_at: dayjs().format(),
  },
  {
    word: "gatsby",
    created_at: dayjs().format(),
  },
  {
    word: "nuxt",
    created_at: dayjs().format(),
  },
  {
    word: "vue",
    created_at: dayjs().format(),
  },
  {
    word: "redwoodjs",
    created_at: dayjs().format(),
  },
  {
    word: "sveltekit",
    created_at: dayjs().format(),
  },
  {
    word: "frontend",
    created_at: dayjs().subtract(1, "day").format(),
  },
  {
    word: "backend",
    created_at: dayjs().subtract(1, "day").format(),
  },
  {
    word: "devops",
    created_at: dayjs().subtract(1, "day").format(),
  },
  {
    word: "UI Designer",
    created_at: dayjs().subtract(1, "day").format(),
  },
  {
    word: "cybersecurity",
    created_at: dayjs().subtract(1, "day").format(),
  },
  {
    word: "testing",
    created_at: dayjs().subtract(1, "day").format(),
  },
  {
    word: "UX design",
    created_at: dayjs().subtract(1, "day").format(),
  },
  {
    word: "copywriter",
    created_at: dayjs().subtract(1, "day").format(),
  },
  {
    word: "seo expert",
    created_at: dayjs().subtract(1, "day").format(),
  },
  {
    word: "project manager",
    created_at: dayjs().subtract(1, "day").format(),
  },
  {
    word: "Idempotent",
    created_at: dayjs().add(1, "day").format(),
  },
  {
    word: "Ephemeral",
    created_at: dayjs().add(1, "day").format(),
  },
  {
    word: "Anonymous",
    created_at: dayjs().add(1, "day").format(),
  },
  {
    word: "Predicate",
    created_at: dayjs().add(1, "day").format(),
  },
  {
    word: "Memoization",
    created_at: dayjs().add(1, "day").format(),
  },
  {
    word: "Abstraction",
    created_at: dayjs().add(1, "day").format(),
  },
  {
    word: "Serialization",
    created_at: dayjs().add(1, "day").format(),
  },
  {
    word: "Recurrency",
    created_at: dayjs().add(1, "day").format(),
  },
  {
    word: "OOP",
    created_at: dayjs().add(1, "day").format(),
  },
  {
    word: "factory",
    created_at: dayjs().add(1, "day").format(),
  },
];
