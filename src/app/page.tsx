import "server-only";

import Navbar from "@/components/UI/Navbar/Navbar";
import NotePreview, {
  NotePreviewProps,
} from "@/components/Notes/NotePreview/NotePreview";
export default function Home() {
  const dummyNotes: NotePreviewProps[] = [
    {
      word: "assess",
      translation: "szacować",
      explanation: "To estimate something.",
      example:
        "The kids, who are titled at the age of 9 are assessed to be strong Grandmasters in the future.",
    },
    {
      word: "misunderstand",
      translation: "źle zrozumieć",
      explanation: "To understand something wrong.",
      example:
        "There has been a misunderstanding between us, but it's cool now.",
    },
    {
      word: "wealth",
      translation: "bogactwo",
      explanation: "Situation, when somebody has a lot of money.",
      example: "The wealth of Elon Musk is almost impossible to be spent.",
    },
  ];

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-start gap-10">
      <Navbar />
      <p className="text-3xl font-bold">
        Create your <span className="text-accent">notes</span> with{" "}
        <span className="text-accent">no effort</span>.
      </p>

      <div className="flex gap-10 overflow-x-auto">
        {dummyNotes.map((note, id) => {
          const { word, translation, explanation, example } = note;

          return (
            <NotePreview
              key={id}
              word={word}
              translation={translation}
              explanation={explanation}
              example={example}
            />
          );
        })}
      </div>

      <p className="text-3xl font-bold">
        Daily training - <span className="text-accent">10 words</span>
      </p>
    </div>
  );
}
