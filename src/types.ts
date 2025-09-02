
export interface QuestionnaireItem {
  id: number;
  topic: string;
  question: string;
  nist: string;
  article: string;
}

export interface DocumentationItem {
  id: string;
  scope: string;
  requirements: string;
  target: string;
  controlName: string;
  documentation: string;
  articles: string;
}