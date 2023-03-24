export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      notes: {
        Row: {
          created_at: string | null;
          example: string | null;
          explanation: string | null;
          id: string;
          translation: string | null;
          word: string | null;
        };
        Insert: {
          created_at?: string | null;
          example?: string | null;
          explanation?: string | null;
          id?: string;
          translation?: string | null;
          word?: string | null;
        };
        Update: {
          created_at?: string | null;
          example?: string | null;
          explanation?: string | null;
          id?: string;
          translation?: string | null;
          word?: string | null;
        };
      };
      notes_users: {
        Row: {
          id: number;
          note_id: string | null;
          user_id: string | null;
        };
        Insert: {
          id?: number;
          note_id?: string | null;
          user_id?: string | null;
        };
        Update: {
          id?: number;
          note_id?: string | null;
          user_id?: string | null;
        };
      };
      users: {
        Row: {
          avatar_url: string | null;
          email: string | null;
          id: string;
          username: string | null;
        };
        Insert: {
          avatar_url?: string | null;
          email?: string | null;
          id: string;
          username?: string | null;
        };
        Update: {
          avatar_url?: string | null;
          email?: string | null;
          id?: string;
          username?: string | null;
        };
      };
    };
    Views: {
      days_count_by_user: {
        Row: {
          count: number | null;
          user_id: string | null;
        };
      };
      notes_by_date: {
        Row: {
          created_at: string | null;
          example: string | null;
          explanation: string | null;
          note_id: string | null;
          translation: string | null;
          user_id: string | null;
          word: string | null;
        };
      };
      notes_by_user_id: {
        Row: {
          created_at: string | null;
          example: string | null;
          explanation: string | null;
          note_id: string | null;
          translation: string | null;
          user_id: string | null;
          word: string | null;
        };
      };
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


export interface noteForm {
  example: string | null;
  explanation: string | null;
  translation: string | null;
  word: string | null;
}

export type Note = Database["public"]["Tables"]["notes"]["Row"];

export interface NoteNoteID extends Omit<Note, "id"> {
  note_id: string | null;
}
