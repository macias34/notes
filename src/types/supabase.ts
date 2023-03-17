export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface note {
  created_at: string | null;
  example: string | null;
  explanation: string | null;
  id: number;
  translation: string | null;
  word: string;
  url?: string;
}

export interface groupByNote {
  note: {
    created_at: string | null;
    example: string | null;
    explanation: string | null;
    id: number;
    translation: string | null;
    word: string | null;
    url: string;
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
  id: number;
  home?: boolean;
}

export interface Database {
  public: {
    Tables: {
      notes: {
        Row: {
          created_at: string | null;
          example: string | null;
          explanation: string | null;
          id: number;
          translation: string | null;
          word: string | null;
        };
        Insert: {
          created_at?: string | null;
          example?: string | null;
          explanation?: string | null;
          id?: number;
          translation?: string | null;
          word?: string | null;
        };
        Update: {
          created_at?: string | null;
          example?: string | null;
          explanation?: string | null;
          id?: number;
          translation?: string | null;
          word?: string | null;
        };
      };
      notes_users: {
        Row: {
          id: number;
          note_id: number | null;
          user_id: string | null;
        };
        Insert: {
          id?: number;
          note_id?: number | null;
          user_id?: string | null;
        };
        Update: {
          id?: number;
          note_id?: number | null;
          user_id?: string | null;
        };
      };
      users: {
        Row: {
          id: string;
        };
        Insert: {
          id: string;
        };
        Update: {
          id?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
