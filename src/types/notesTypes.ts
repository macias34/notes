export interface notes_users {
  user_id: string;
  note_id: string;
}

export interface note {
  created_at: string | null;
  example: string | null;
  explanation: string | null;
  id: string;
  translation: string | null;
  word: string | null;
}

export interface groupByNote {
  note: {
    created_at: string | null;
    example: string | null;
    explanation: string | null;
    id: number;
    translation: string | null;
    word: string | null;
  };
}

export interface noteForm {
  example: string | null;
  explanation: string | null;
  translation: string | null;
  word: string | null;
}

export interface SingleNoteProps {
  word: string | null;
  created_at: string | null;
  id?: number;
  home?: boolean;
}
