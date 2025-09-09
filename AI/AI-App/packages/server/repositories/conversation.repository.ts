let conversations = new Map<string, string>();

export const conversationRepositiory = {
  getLastResponseId(conversationsId: string) {
    return conversations.get(conversationsId);
  },
  setLastResponseId(conversationsId: string, responseId: string) {
    conversations.set(conversationsId, responseId);
  },
};
