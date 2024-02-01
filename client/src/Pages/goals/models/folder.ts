export type Folder = {
  id: string;
  order: number;
  title: string;
  description?: string;
  isOpened: boolean;
};

export type FolderOutDTO = {
  id: string;
  order: number;
  title: string;
  description?: string;
};
