export type CreateHandleChangeArgsWithDescriptions<T> =
  | [field: Exclude<keyof T, "descriptions">, value: string]
  | [field: "descriptions", value: string[]];export type ShowForm = 'workExperiences' | 'educations' | 'projects' | 'skills' | 'custom' | 'myCustomForm';
