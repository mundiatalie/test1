export async function createDraftFromTemplate(type: string, payload: Record<string, string>) {
  return {
    documentId: `doc_${type}_${Date.now()}`,
    templateId: `template_${type}`,
    summary: payload
  };
}
