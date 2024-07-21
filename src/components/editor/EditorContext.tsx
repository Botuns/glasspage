// EditorContext.tsx
import React, { createContext, useContext, useState } from "react";

interface EditorContextProps {
  editingElement: string;
  setEditingElement: (element: string) => void;
}

const EditorContext = createContext<EditorContextProps | undefined>(undefined);

export const EditorProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [editingElement, setEditingElement] = useState<string>("page");

  return (
    <EditorContext.Provider value={{ editingElement, setEditingElement }}>
      {children}
    </EditorContext.Provider>
  );
};

export const useEditorContext = (): EditorContextProps => {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error("useEditor must be used within an EditorProvider");
  }
  return context;
};
